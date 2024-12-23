<script lang="ts">
	import { onMount } from 'svelte';
	import { createHighlighter } from 'shiki';
	import { shikiContext } from '.';
	import { LANGUAGES } from './langs';

	const shiki = shikiContext.init(undefined);

	let { children } = $props();

	onMount(() => {
		createHighlighter({
			themes: ['github-dark-default', 'github-light-default'],
			langs: [...LANGUAGES]
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
