<script lang="ts">
	import { onMount } from 'svelte';
	import { highlighter } from './shiki';
	import { shikiContext } from '.';

	const shiki = shikiContext.init(undefined);

	let { children } = $props();

	onMount(() => {
		highlighter.then((highlighter) => shiki.set(highlighter));

		return () => $shiki?.dispose();
	});
</script>

{@render children()}

<!--
	Provides a shiki highlighter instance to use around your app. 

	## Usage
	`./src/routes/+layout.svelte`
	```
	<script lang="ts">
		import { ShikiProvider } from '$lib/components/ui/code';
	</script>

	<ShikiProvider>
		{@render children()}
	</ShikiProvider>
	```
 	@component
-->
