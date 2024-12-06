<script lang="ts">
	import type { Route } from '$lib/map';
	import type { Snippet } from 'svelte';

	type Props = {
		route: Route;
		children: Snippet;
	};

	let { children, route }: Props = $props();
</script>

<svelte:head>
	<title>{route.description} - shadcn-svelte-extras</title>
	<meta name="description" content={route.name} />
</svelte:head>

<div class="flex flex-col gap-5 p-6 max-w-3xl">
	<div class="flex flex-col gap-1">
		<h1 class="text-4xl font-bold">
			{route.name}
		</h1>
		<p class="text-lg text-muted-foreground">
			{route.description}
		</p>
	</div>
	{@render children()}
</div>
