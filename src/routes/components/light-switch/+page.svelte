<script lang="ts">
	import Playground from '$lib/components/playground.svelte';
	import { Code } from '$lib/components/ui/code-block';
	import { LightSwitch } from '$lib/components/ui/light-switch';
</script>

<Playground>
	<LightSwitch />
</Playground>
<Code lang="svelte" code={`<LightSwitch />`} />
