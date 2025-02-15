<script lang="ts">
	import { Subheading } from '$lib/components/docs';
	import Installation from '$lib/components/installation.svelte';
	import Playground from '$lib/components/playground.svelte';
	import { Code } from '$lib/components/ui/code';
	import { examples } from './examples';
</script>

<Playground code={examples.basic.code}>
	<examples.basic.Component />
</Playground>
<Installation specifier="ui/image-cropper" />
<Subheading>Usage</Subheading>
<div>
	<Code
		lang="svelte"
		code={`\<script lang="ts"\>
	import * as ImageCropper from '$lib/components/ui/image-cropper';
\<\/script\>

<ImageCropper.Root>
	<ImageCropper.Trigger/>
	<ImageCropper.Dialog>
		<ImageCropper.Cropper/>
		<ImageCropper.Controls>
			<ImageCropper.Crop/>
			<ImageCropper.Cancel/>
		</ImageCropper.Controls>
	</ImageCropper.Dialog>
</ImageCropper.Root>`}
	/>
</div>
