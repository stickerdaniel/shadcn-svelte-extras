<script lang="ts">
	import Playground from '$lib/components/playground.svelte';
	import { Code } from '$lib/components/ui/code-block';
	import { Snippet } from '$lib/components/ui/snippet';
</script>

<Playground>
	<Snippet text="npx jsrepo add ui/snippet" class="max-w-[300px]" />
</Playground>
<Code lang="svelte" code={`<Snippet text="npx jsrepo add ui/snippet" class="max-w-[300px]"/>`} />
<Playground>
	<div class="flex w-full max-w-[300px] flex-col gap-2">
		<Snippet text="npx jsrepo add ui/snippet" />
		<Snippet variant="primary" text="npx jsrepo add ui/snippet" />
		<Snippet variant="secondary" text="npx jsrepo add ui/snippet" />
		<Snippet variant="destructive" text="npx jsrepo add ui/snippet" />
	</div>
</Playground>
<Code
	lang="svelte"
	code={`<div class="flex flex-col gap-2 w-full max-w-[300px]">
    <Snippet text="npx jsrepo add ui/snippet" />
    <Snippet variant="primary" text="npx jsrepo add ui/snippet" />
    <Snippet variant="secondary" text="npx jsrepo add ui/snippet" />
    <Snippet variant="destructive" text="npx jsrepo add ui/snippet" />
</div>`}
/>
<Playground>
	<Snippet text={['npx jsrepo add', 'npx jsrepo add ui/snippet']} class="max-w-[300px]" />
</Playground>
<Code
	lang="svelte"
	code={`<Snippet text={["npx jsrepo add", "npx jsrepo add ui/snippet"]} class="max-w-[300px]"/>`}
/>
