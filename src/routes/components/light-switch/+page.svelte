<script lang="ts">
	import Playground from '$lib/components/playground.svelte';
	import { examples } from './examples';
</script>

<h2 class="text-2xl font-semibold">Basic</h2>
<Playground code={examples.basic.code}>
	<examples.basic.Component />
</Playground>
<h2 class="text-2xl font-semibold">Ghost</h2>
<Playground code={examples.variants.code}>
	<examples.variants.Component />
</Playground>
