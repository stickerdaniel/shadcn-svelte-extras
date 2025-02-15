<script lang="ts">
	import Cropper from 'svelte-easy-crop';
	import { useImageCropperCropper } from './image-cropper.svelte.js';

	const cropperState = useImageCropperCropper();
</script>

<div class="relative h-full w-full">
	<Cropper
		image={cropperState.rootState.opts.src.current}
		oncropcomplete={cropperState.onCropComplete}
	/>
</div>
