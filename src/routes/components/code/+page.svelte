<script lang="ts">
	import Playground from '$lib/components/playground.svelte';
	import { Code } from '$lib/components/ui/code';
</script>

<Playground>
	<Code
	lang="svelte"
    class="w-full"
	code={`<Button loading>
    Hello
</Button>`}
/>
</Playground>
<Code
	lang="svelte"
	code={`<Code
	lang="svelte"
    class="w-full"
	code={\`<Button loading>
    Hello
</Button>\`}
/>`}
/>
<Code
	lang="typescript"
	code={`import { shiki } from '$lib/components/ui/code';

// initialize highlighter context
shiki();`}
/>