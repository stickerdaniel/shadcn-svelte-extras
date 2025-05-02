<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';

	let layers = $props();
</script>

<div class="relative h-40 w-40 flex-shrink-0">
	<Avatar.Root class="absolute left-0 top-0 h-full w-full">
		<Avatar.Fallback>AV</Avatar.Fallback>
	</Avatar.Root>
	{#each layers as layerSrc (layerSrc)}
		<img
			src={layerSrc}
			alt=""
			class="pointer-events-none absolute left-0 top-0 h-full w-full object-contain"
		/>
	{/each}
</div>
