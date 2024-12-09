<script lang="ts">
	import type { Route } from '$lib/map';
	import type { Snippet as SnippetType } from 'svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Code } from 'lucide-svelte';

	type Props = {
		doc: { group: string; doc: Route } | undefined;
		children: SnippetType;
	};

	let { children, doc }: Props = $props();
</script>

<svelte:head>
	{#if doc}
		<title>{doc.doc.name} - shadcn-svelte-extras</title>
		<meta name="description" content={doc.doc.description} />
	{/if}
</svelte:head>

<div class="flex flex-col p-6 md:px-10 lg:place-items-center lg:px-20">
	<div class="flex w-full max-w-3xl flex-col gap-5">
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
		{@render children()}
	</div>
</div>
