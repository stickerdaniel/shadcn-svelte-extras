<script lang="ts">
	import { Code } from '$lib/components/ui/code';
</script>

<p>Create a share context instance.</p>
<Code
	lang="typescript"
	code={`const MY_CONTEXT_KEY = 'my-context-key';

export const myContext = context<string>(MY_CONTEXT_KEY);`}
/>
<p>Initialize the context in the parent component.</p>
<Code
	lang="svelte"
	code={`\<script\>
    const ctx = myContext.init('Hello world!');

    console.log($ctx); // Hello world!
</script>`}
/>
<p>Get the context in a child component.</p>
<Code
	lang="svelte"
	code={`\<script\>
    const ctx = myContext.get();

    console.log($ctx); // Hello world!
</script>`}
/>
<p>Updating the store will trigger updates to every context consumer.</p>
