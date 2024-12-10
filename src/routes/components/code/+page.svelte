<script lang="ts">
	import { CodeSpan, Subheading } from '$lib/components/docs';
	import Installation from '$lib/components/installation.svelte';
	import Playground from '$lib/components/playground.svelte';
	import { Code } from '$lib/components/ui/code';
	import { examples } from './examples';
</script>

<Subheading class="mt-0">Basic</Subheading>
<Playground code={examples.basic.code}>
	<examples.basic.Component />
</Playground>
<Installation specifier="ui/code" />
<p>
	To highlight the code you'll need a to initialize the highlighter context you can do that by
	adding the following code to your <CodeSpan>./src/routes/+layout.svelte</CodeSpan>.
</p>
<Code lang="svelte" code={examples.providerCode} />
