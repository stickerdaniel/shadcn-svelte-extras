<script lang="ts">
	import { CodeSpan, Subheading } from '$lib/components/docs';
	import Installation from '$lib/components/installation.svelte';
	import Playground from '$lib/components/playground.svelte';
	import { Code } from '$lib/components/ui/code';
	import { examples } from './examples';
	import shikiProviderRaw from '$lib/components/ui/code/shiki-provider.svelte?raw';
	import langsRaw from '$lib/components/ui/code/langs.ts?raw';
</script>

<Subheading class="mt-0">Basic</Subheading>
<Playground code={examples.basic.code}>
	<examples.basic.Component />
</Playground>
<Installation specifier="ui/code" />
<!-- <p>
	To highlight the code you'll need a to initialize the highlighter context you can do that by
	adding the following code to your <CodeSpan>./src/routes/+layout.svelte</CodeSpan>:
</p> -->
<Code lang="svelte" code={examples.providerCode} class="h-fit" highlight={[2, [6, 8]]} />
<p>
	The highlighter can be configured from <CodeSpan>shiki-provider.svelte</CodeSpan>.
</p>
<Code lang="svelte" code={shikiProviderRaw} highlight={[[12, 15]]} />
<p>
	The supported languages can be configured from <CodeSpan>langs.ts</CodeSpan>.
</p>
<Code lang="typescript" code={langsRaw} class="h-fit" highlight={[2]} />
<Subheading>No Line Numbers</Subheading>
<Playground code={examples.noLineNumbers.code}>
	<examples.noLineNumbers.Component />
</Playground>
<Subheading>Variants</Subheading>
<Playground code={examples.variants.code}>
	<examples.variants.Component />
</Playground>
<Subheading>Highlight Lines</Subheading>
<Playground code={examples.highlightLines.code} class="h-[500px]">
	<examples.highlightLines.Component />
</Playground>
