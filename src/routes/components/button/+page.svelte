<script lang="ts">
	import Playground from '$lib/components/playground.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Code } from '$lib/components/ui/code-block';
</script>

<Playground>
	<Button>Hello</Button>
</Playground>
<Code
	lang="svelte"
	code={`<Button loading>
    Hello
</Button>`}
/>
<Playground>
	<Button loading>Loading</Button>
</Playground>
<Code
	lang="svelte"
	code={`<Button loading>
    Hello
</Button>`}
/>
