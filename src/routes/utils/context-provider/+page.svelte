<script lang="ts">
	import { Subheading } from '$lib/components/docs';
	import Installation from '$lib/components/installation.svelte';
	import { Code } from '$lib/components/ui/code';
</script>

<Installation specifier={'utils/context-provider'} />
<Subheading>Usage</Subheading>
<p>Create a shared context instance.</p>
<div>
	<Code
		lang="typescript"
		code={`const MY_CONTEXT_KEY = 'my-context-key';

export const myContext = context<string>(MY_CONTEXT_KEY);`}
	/>
</div>
<p>Initialize the context in the parent component.</p>
<div>
	<Code
		lang="svelte"
		code={`\<script\>
    const ctx = myContext.init('Hello world!');

    console.log($ctx); // Hello world!
</script>`}
	/>
</div>
<p>Get the context in a child component.</p>
<div>
	<Code
		lang="svelte"
		code={`\<script\>
    const ctx = myContext.get();

    console.log($ctx); // Hello world!
</script>`}
	/>
</div>
<p>Updating the store will trigger updates to every context consumer.</p>
