<script lang="ts">
	import type { Route } from '$lib/map';
	import type { Snippet as SnippetType } from 'svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Code } from 'lucide-svelte';
	import * as Navigation from '$lib/components/ui/prev-next';
	import { UseToc } from '$lib/hooks/use-toc.svelte';

	type Props = {
		doc: { group: string; doc: Route; next?: Route; prev?: Route } | undefined;
		children: SnippetType;
	};

	let { children, doc }: Props = $props();

	const toc = new UseToc();
</script>

<svelte:head>
	{#if doc}
		<title>{doc.doc.name} - shadcn-svelte-extras</title>
		<meta name="description" content={doc.doc.description} />
	{/if}
</svelte:head>

<div class="flex flex-col p-6 md:px-10 lg:place-items-center lg:px-20">
	<div
		class="flex w-full max-w-3xl flex-col justify-between gap-5"
		style="min-height: calc(100svh - 112px);"
	>
		<div class="flex flex-col gap-5">
			{#if doc}
				<div class="flex flex-col gap-1">
					<h1 class="text-4xl font-bold">
						{doc.doc.name}
					</h1>
					<p class="text-lg text-muted-foreground">
						{doc.doc.description}
					</p>
					{#if doc.doc.source}
						<Badge
							href={new URL(
								doc.doc.source,
								'https://github.com/ieedan/shadcn-svelte-extras/tree/main/'
							).toString()}
							variant="secondary"
							target="_blank"
							class="flex w-fit place-items-center gap-1 rounded-md"
						>
							<span class="font-semibold">Component Source</span>
							<Code class="size-3.5" />
						</Badge>
					{/if}
				</div>
			{/if}
			<div bind:this={toc.ref} style="display: contents;">
				{@render children()}
			</div>
		</div>
		<Navigation.Root class="pt-10">
			{#snippet previous()}
				{#if doc?.prev}
					<Navigation.Previous href={doc.prev.href}>
						{doc.prev.name}
					</Navigation.Previous>
				{/if}
			{/snippet}
			{#snippet next()}
				{#if doc?.next}
					<Navigation.Next href={doc.next.href}>
						{doc.next.name}
					</Navigation.Next>
				{/if}
			{/snippet}
		</Navigation.Root>
	</div>
</div>
