<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { mergeProps, useId } from 'bits-ui';
	import type { ImageCropperTriggerProps } from './types';
	import { box } from 'svelte-toolbelt';
	import { useImageCropperTrigger } from './image-cropper.svelte.js';
	import { Upload } from 'lucide-svelte';

	let { id = useId(), child, ...rest }: ImageCropperTriggerProps = $props();

	const triggerState = useImageCropperTrigger({ id: box.with(() => id) });

	const mergedProps = $derived(
		mergeProps(rest, { id, src: triggerState.rootState.opts.src?.current })
	);
</script>

<label for={id}>
	{#if child}
		{@render child({ props: mergedProps })}
	{:else}
		<Avatar.Root class="size-10">
			<Avatar.Image src={triggerState.rootState.opts.src?.current} />
			<Avatar.Fallback>
				<Upload class="size-4" />
			</Avatar.Fallback>
		</Avatar.Root>
	{/if}
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
