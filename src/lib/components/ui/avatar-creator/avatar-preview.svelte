<script lang="ts">
	// Accept layers from parent component
	let {
		layers = $bindable([]),
		size = 250,
		flipped = false
	}: {
		layers: string[];
		size?: number;
		flipped?: boolean;
	} = $props();

	// Generate a unique ID for SVG filter
	const avatarId = $derived(`avatar-${Math.random().toString(36).substring(2, 9)}`);

	// State for the combined SVG
	let combinedSvg = $state('');

	// Load and combine SVGs when layers change
	$effect(() => {
		loadSvgLayers(layers);
	});

	// Function to properly load and process SVG layers
	async function loadSvgLayers(layerPaths: string[]) {
		const layerContents = await Promise.all(
			layerPaths.map(async (path, index) => {
				const response = await fetch(path);
				const svgText = await response.text();

				// More robust check for face layer: could be "/face/" or "face-", etc.
				const isFace = path.toLowerCase().includes('face');

				// Create a temporary DOM element to parse the SVG
				const parser = new DOMParser();
				const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');

				// Get the g element
				const gElement = svgDoc.querySelector('g');
				if (!gElement) return '';

				// Clone the g element to manipulate it
				const gClone = gElement.cloneNode(true) as Element;

				// For face layer, set fill attribute on the group level
				if (isFace) {
					// Force white fill on the group level
					gClone.setAttribute('fill', 'white');

					// Additionally, find all paths and ensure they use the fill
					const paths = gClone.querySelectorAll('path');
					paths.forEach((path) => {
						// Remove any explicit fill that would override our group fill
						if (path.hasAttribute('fill')) {
							path.removeAttribute('fill');
						}
					});
				}

				// Add our custom attributes to the g element
				gClone.setAttribute('id', `${avatarId}-layer-${index}`);

				// Apply transform for flipping if needed
				if (flipped) {
					const currentTransform = gClone.getAttribute('transform') || '';
					gClone.setAttribute('transform', `scale(-1,1) translate(-1080, 0) ${currentTransform}`);
				}

				// Get the g element's outer HTML
				const serializer = new XMLSerializer();
				return serializer.serializeToString(gClone);
			})
		);

		// Combine into a single SVG with Notion-style filter
		combinedSvg = `
      <svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <filter id="${avatarId}-filter" x="-20%" y="-20%" width="140%" height="140%" 
                  filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" 
                  color-interpolation-filters="linearRGB">
            <feMorphology operator="dilate" radius="20 20" in="SourceAlpha" result="morphology"/>
            <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>
            <feComposite in="flood" in2="morphology" operator="in" result="composite"/>
            <feMerge result="merge">
              <feMergeNode in="composite" result="mergeNode"/>
              <feMergeNode in="SourceGraphic" result="mergeNode1"/>
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#${avatarId}-filter)">
          ${layerContents.join('\n')}
        </g>
      </svg>
    `;
	}
</script>

<div
	class="relative flex aspect-square items-center justify-center overflow-hidden rounded-full bg-background"
	style="width: {size}px; height: {size}px;"
>
	<div class="h-full w-full">
		{@html combinedSvg}
	</div>
</div>
