<script lang="ts">
	import Playground from '$lib/components/playground.svelte';
	import { examples } from './examples';
</script>

<p>The same old button you know from shadcn-svelte with a few extra touches.</p>
<h2 class="text-2xl font-semibold">Basic</h2>
<Playground code={examples.basic.code} class="min-h-[225px]">
	<examples.basic.Component />
</Playground>
<h2 class="text-2xl font-semibold">Loading</h2>
<Playground code={examples.loading.code} class="min-h-[225px]">
	<examples.loading.Component />
</Playground>
