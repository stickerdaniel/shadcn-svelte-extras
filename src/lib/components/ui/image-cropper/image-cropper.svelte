<script lang="ts">
	import { box } from 'svelte-toolbelt';
	import { useImageCropperRoot } from './image-cropper.svelte.js';
	import type { ImageCropperRootProps } from './types';
	import { onDestroy } from 'svelte';

	let { src = $bindable(''), onCropped = () => {}, children }: ImageCropperRootProps = $props();

	const rootState = useImageCropperRoot({
		src: box.with(
			() => src,
			(v) => (src = v)
		),
		onCropped
	});

	onDestroy(() => rootState.dispose());
</script>

{@render children?.()}
