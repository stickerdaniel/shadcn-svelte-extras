<script lang="ts">
	import Cropper from 'svelte-easy-crop';
	import { useImageCropperCropper } from './image-cropper.svelte.js';

	const cropperState = useImageCropperCropper();
</script>

<!-- This needs to be relative https://github.com/ValentinH/svelte-easy-crop#basic-usage -->
<div class="relative h-full w-full">
	<Cropper
		aspect={1}
		image={cropperState.rootState.tempUrl}
		oncropcomplete={cropperState.onCropComplete}
	/>
</div>
