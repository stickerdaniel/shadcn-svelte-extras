<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';

	let layers = $props();
</script>

<div class="h-44 w-44">
	<Avatar.Root class="h-full w-full">
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
