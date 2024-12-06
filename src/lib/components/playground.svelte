<script lang="ts">
	import type { Snippet } from 'svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import { Code } from '$lib/components/ui/code';
	import { cn } from '$lib/utils/utils';

	type Props = {
		code: string;
		class?: string;
		children: Snippet<[]>;
	};

	let { children, code, class: className = undefined }: Props = $props();

	let tab: 'preview' | 'code' = $state('preview');
</script>

<div
	class={cn(
		'relative flex min-h-[400px] place-items-center justify-center rounded-lg border border-border',
		className
	)}
>
	<Tabs.Root bind:value={tab} class="size-full">
		<Tabs.List class="absolute right-3 top-3 z-10">
			<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
			<Tabs.Trigger value="code">Code</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="preview" class="size-full">
			<div class="flex size-full place-items-center justify-center">
				{@render children()}
			</div>
		</Tabs.Content>
		<Tabs.Content value="code" class="size-full pb-4">
			<Code lang="svelte" {code} class="size-full border-none" hideLines hideCopy />
		</Tabs.Content>
	</Tabs.Root>
</div>
