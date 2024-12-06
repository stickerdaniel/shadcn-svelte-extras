<script lang="ts">
	import Playground from '$lib/components/playground.svelte';
	import { Code } from '$lib/components/ui/code';
	import { ThemeSelector } from '$lib/components/ui/theme-selector';
</script>

<Playground>
	<ThemeSelector />
</Playground>
<Code lang="svelte" code={`<ThemeSelector />`} />
