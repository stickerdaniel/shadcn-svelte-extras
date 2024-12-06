<script lang="ts">
	import type { Route } from '$lib/map';
	import type { Snippet as SnippetType } from 'svelte';
	import { Snippet } from '$lib/components/ui/snippet';

	type Props = {
		route: Route;
		children: SnippetType;
	};

	let { children, route }: Props = $props();
</script>

<svelte:head>
	<title>{route.description} - shadcn-svelte-extras</title>
	<meta name="description" content={route.name} />
</svelte:head>

<div class="flex max-w-3xl flex-col gap-5 p-6">
	<div class="flex flex-col gap-1">
		<h1 class="text-4xl font-bold">
			{route.name}
		</h1>
		<p class="text-lg text-muted-foreground">
			{route.description}
		</p>
	</div>
	{#if route.specifier}
		<Snippet text="jsrepo add {route.specifier}" class="max-w-[350px]" />
	{/if}
	{@render children()}
</div>
