<script lang="ts">
	import * as ImageCropper from '$lib/components/ui/image-cropper';
</script>

<ImageCropper.Root src="https://github.com/shadcn.png">
	<ImageCropper.UploadTrigger>
		<ImageCropper.Preview>
			{#snippet child({ src })}
				<img {src} alt="your avatar" class="size-32 border-2 border-blue-500" />
			{/snippet}
		</ImageCropper.Preview>
	</ImageCropper.UploadTrigger>
	<ImageCropper.Dialog>
		<ImageCropper.Cropper cropShape="rect" />
		<ImageCropper.Controls>
			<ImageCropper.Cancel />
			<ImageCropper.Crop />
		</ImageCropper.Controls>
	</ImageCropper.Dialog>
</ImageCropper.Root>
