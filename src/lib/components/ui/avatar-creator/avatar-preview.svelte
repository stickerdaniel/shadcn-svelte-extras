<script lang="ts">
	let {
		layers,
		size = 250
	}: {
		layers: string[];
		size?: number;
	} = $props();

	// Generate a random ID for the avatar to avoid SVG conflicts
	const avatarId = $derived(`avatar-${Math.random().toString(36).substring(2, 9)}`);
</script>

<div
	class="relative flex aspect-square items-center justify-center overflow-hidden rounded-full bg-muted"
	style="width: {size}px; height: {size}px;"
>
	{#each layers as layer, i (layer)}
		<img
			src={layer}
			alt={`Avatar layer ${i + 1}`}
			class="absolute left-0 top-0 h-full w-full"
			id={`${avatarId}-layer-${i}`}
		/>
	{/each}
</div>
