<script lang="ts">
	import Playground from '$lib/components/playground.svelte';
	import { Code } from '$lib/components/ui/code';
	import { examples } from './examples';
</script>

<h2 class="text-2xl font-semibold">Basic</h2>
<Playground code={examples.basic.code}>
	<examples.basic.Component />
</Playground>
<p>
	The Code component makes use of a highlighter context to highlight the code add the following code
	to your ./src/routes/+layout.svelte.
</p>
<Code
	lang="typescript"
	code={`import { shiki } from '$lib/components/ui/code';

// initialize highlighter context
shiki();`}
/>
