<script lang="ts">
	import { Code } from '$lib/components/ui/code';

	const code = `import { Code } from "$lib/components/ui/code";`;
</script>

<div class="w-full p-6">
	<Code lang="typescript" class="w-full" {code} hideLines />
</div>
