<script lang="ts">
	import { Code } from '$lib/components/ui/code';
    import codeCode from '$lib/components/ui/code/code.svelte?raw'
</script>

<div class="w-full p-6">
	<Code lang="svelte" class="w-full" code={codeCode}/>
</div>
