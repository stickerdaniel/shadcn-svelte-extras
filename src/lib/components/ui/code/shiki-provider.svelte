<script lang="ts">
	import { onMount } from 'svelte';
	import { createHighlighter } from 'shiki';
	import { shikiContext } from '.';

	const shiki = shikiContext.init(undefined);

	let { children } = $props();

	onMount(() => {
		createHighlighter({
			themes: ['github-dark-default', 'github-light-default'],
			// make sure you setup any languages you are going to use here
			langs: ['typescript', 'javascript', 'svelte', 'diff', 'json', 'tsx', 'css']
		}).then((highlighter) => shiki.set(highlighter));

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
