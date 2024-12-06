<script lang="ts">
	import ShadcnSvelteExtras from '$lib/components/shadcn-svelte-extras.svelte';
	import { Code } from '$lib/components/ui/code';
	import { Snippet } from '$lib/components/ui/snippet';
</script>

<p>
	<ShadcnSvelteExtras /> uses
	<a target="_blank" href="https://jsrepo.dev" class="font-bold underline"> jsrepo </a> to allow you
	to install blocks into project just like in
	<a target="_blank" href="https://next.shadcn-svelte.com" class="text-nowrap font-bold underline">
		shadcn-svelte
	</a>.
</p>
<h2 class="text-2xl font-semibold">Setup</h2>
<p>Install jsrepo:</p>
<Snippet text="npm install jsrepo@latest -g" />
<p>
	Initialize jsrepo and add <ShadcnSvelteExtras /> as a repo:
</p>
<Snippet text="jsrepo init --project --repos github/ieedan/shadcn-svelte-extras" />
<p>Configure your paths so that components, hooks, and utils go to the right places:</p>
<Code
	lang="json"
	code={`{
    paths: {
        "*": "$lib/blocks",
        "ui": "$lib/components/ui",
		"hooks": "$lib/hooks",
		"utils": "$lib/utils"
    }
}`}
/>
<p>Start adding extras!</p>
<Snippet text="jsrepo add ui/button" />
