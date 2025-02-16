<script lang="ts">
	import * as ImageCropper from '$lib/components/ui/image-cropper';
</script>

<ImageCropper.Root src="https://github.com/shadcn.png">
	<ImageCropper.Trigger class="rounded-md" />
	<ImageCropper.Dialog>
		<ImageCropper.Cropper cropShape="rect" />
		<ImageCropper.Controls>
			<ImageCropper.Cancel />
			<ImageCropper.Crop />
		</ImageCropper.Controls>
	</ImageCropper.Dialog>
</ImageCropper.Root>
