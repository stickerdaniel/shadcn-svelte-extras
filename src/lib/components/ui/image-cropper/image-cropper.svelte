<script lang="ts">
	import { useImageCropperRoot } from "./state.svelte";
	import type { ImageCropperRootProps } from "./types";

    let { src, children }: ImageCropperRootProps = $props();

    useImageCropperRoot();
</script>

{@render children?.()}