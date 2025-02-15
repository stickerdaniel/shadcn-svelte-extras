<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { useId } from 'bits-ui';
	import type { ImageCropperTriggerProps } from './types';
	import { box } from 'svelte-toolbelt';
	import { useImageCropperTrigger } from './image-cropper.svelte.js';
	import { Upload } from 'lucide-svelte';
	import { cn } from '$lib/utils/utils';

	let { id = useId(), class: className, ...rest }: ImageCropperTriggerProps = $props();

	const triggerState = useImageCropperTrigger({ id: box.with(() => id) });
</script>

<label for={id} class="hover:cursor-pointer">
	<Avatar.Root
		class={cn('size-20 ring-2 ring-accent ring-offset-2 ring-offset-background', className)}
	>
		<Avatar.Image src={triggerState.rootState.opts.src?.current} />
		<Avatar.Fallback>
			<Upload class="size-4" />
		</Avatar.Fallback>
	</Avatar.Root>
	<input
		{...rest}
		onchange={(e) => {
			const file = e.currentTarget.files?.[0];
			if (!file) return;
			triggerState.rootState.onUpload(file);
			// reset so that we can reupload the same file
			(e.target! as HTMLInputElement).value = '';
		}}
		accept="image/*"
		type="file"
		{id}
		style="display: none;"
	/>
</label>
