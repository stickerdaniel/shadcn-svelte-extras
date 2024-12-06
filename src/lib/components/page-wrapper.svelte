<script lang="ts">
	import type { Route } from '$lib/map';
	import type { Snippet as SnippetType } from 'svelte';
	import { Snippet } from '$lib/components/ui/snippet';

	type Props = {
		doc: { group: string; doc: Route } | undefined;
		children: SnippetType;
	};

	let { children, doc }: Props = $props();
</script>

<svelte:head>
	{#if doc}
		<title>{doc.doc.description} - shadcn-svelte-extras</title>
		<meta name="description" content={doc.doc.name} />
	{/if}
</svelte:head>

<div class="flex max-w-3xl flex-col gap-5 p-6">
	{#if doc}
		<div class="flex flex-col gap-1">
			<h1 class="text-4xl font-bold">
				{doc.doc.name}
			</h1>
			<p class="text-lg text-muted-foreground">
				{doc.doc.description}
			</p>
		</div>
		{#if doc.doc.specifier}
			<Snippet text="jsrepo add {doc.doc.specifier}" class="max-w-[350px]" />
		{/if}
	{/if}
	{@render children()}
</div>
