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

	// Function to load and modify SVG layers
	async function loadSvgLayers(layerPaths: string[]) {
		try {
			const layerContents = await Promise.all(
				layerPaths.map(async (path, index) => {
					const response = await fetch(path);
					let svgContent = await response.text();

					// Check if this is the face layer
					const isFace = path.includes('/face/');

					// Extract the g element with all its attributes
					const gMatch = svgContent.match(/<g[^>]*>([\s\S]*?)<\/g>/);
					if (!gMatch) return '';

					// Get all the g element attributes
					const gAttributes = svgContent.match(/<g([^>]*)>/)?.[1] || '';

					// Create a new g element with preserved attributes
					// For face layer, override the fill to be white
					let newG = `<g ${gAttributes} ${isFace ? 'fill="white"' : ''} 
                       id="${avatarId}-layer-${index}" 
                       ${flipped ? 'transform="scale(-1,1) translate(-1080, 0)"' : ''}>
                       ${gMatch[1]}
                     </g>`;

					return newG;
				})
			);

			// Combine into a single SVG
			combinedSvg = `
        <svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
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
		} catch (error) {
			console.error('Error loading SVG layers:', error);

			// Fallback to rendering images if SVG processing fails
			combinedSvg = `
        <svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
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
          <g filter="url(#${avatarId}-filter)" transform="${flipped ? 'scale(-1,1) translate(-1080, 0)' : ''}">
            ${layers
							.map(
								(layer, i) => `
              <image href="${layer}" width="1080" height="1080" preserveAspectRatio="xMidYMid meet" />
            `
							)
							.join('\n')}
          </g>
        </svg>
      `;
		}
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
