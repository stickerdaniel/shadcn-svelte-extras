<script lang="ts">
	import { Subheading } from '$lib/components/docs';
	import Installation from '$lib/components/installation.svelte';
	import Playground from '$lib/components/playground.svelte';
	import { Code } from '$lib/components/ui/code';
	import { examples } from './examples';
</script>

<Playground code={examples.basic.code}>
    <examples.basic.Component/>
</Playground>
<Installation specifier={'actions/shortcut.svelte'} />
