<script lang="ts">
	import type { Heading } from '$lib/hooks/use-toc.svelte';
	import { cn } from '$lib/utils/utils';
	import Self from './toc.svelte';

	type Props = {
		toc: Heading[];
		class?: string;
		/** Indicates whether this is a child component or root component */
		isChild?: boolean;
	};

	let { toc, isChild = false, class: className }: Props = $props();
</script>

<ul class={cn('m-0 list-none text-sm', { 'pl-4': isChild })}>
	{#each toc as heading}
		<li class="mt-0 pt-2 text-muted-foreground">
			{#if heading.id}
				<a href="#{heading.id}" class="hover:text-foreground transition-all">
					{heading.label}
				</a>
			{:else}
				{heading.label}
			{/if}
		</li>
		{#if heading.children.length > 0}
			<Self class={className} toc={heading.children} isChild={true} />
		{/if}
	{/each}
</ul>
