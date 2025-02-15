<script lang="ts">
	import Cropper from 'svelte-easy-crop';
	import { useImageCropperCropper } from './image-cropper.svelte.js';

	const cropperState = useImageCropperCropper();
</script>

<div class="relative h-full w-full">
	<Cropper
		aspect={1}
		image={cropperState.rootState.tempUrl}
		oncropcomplete={cropperState.onCropComplete}
	/>
</div>
