<script lang="ts">
	import Playground from '$lib/components/playground.svelte';
	import { examples } from './examples';
</script>

<Playground code={examples.basic.code}>
	<examples.basic.Component />
</Playground>
