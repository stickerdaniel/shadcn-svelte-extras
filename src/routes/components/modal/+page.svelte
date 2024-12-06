<script lang="ts">
	import Playground from '$lib/components/playground.svelte';
	import { Code } from '$lib/components/ui/code-block';
	import { Modal } from '$lib/components/ui/modal';
	import { Button } from '$lib/components/ui/button';

	let open = false;
</script>

<Playground>
	<Button onclick={() => (open = true)}>Open Modal</Button>
	<Modal bind:open>Hello</Modal>
</Playground>
<Code
	lang="svelte"
	code={`<Button onclick={() => open = true}>
    Open Modal
</Button>
<Modal bind:open>
    Hello
</Modal>`}
/>
