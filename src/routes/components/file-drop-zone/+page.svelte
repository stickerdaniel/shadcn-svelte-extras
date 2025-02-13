<script lang="ts">
	import { Subheading } from '$lib/components/docs';
	import Installation from '$lib/components/installation.svelte';
	import Playground from '$lib/components/playground.svelte';
	import { examples } from './examples';
</script>

<Subheading class="mt-0">Basic</Subheading>
<Playground code={examples.basic.code} class="min-h-[300px] p-6">
	<examples.basic.Component />
</Playground>
<Installation specifier="ui/file-drop-zone" />
