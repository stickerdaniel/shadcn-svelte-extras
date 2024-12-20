<script lang="ts">
	import { Code } from '$lib/components/ui/code';
</script>

<div class="flex w-full flex-col gap-4 p-6">
	<Code
		lang="typescript"
		class="w-full"
		variant="secondary"
		hideLines
		code={`import { Code } from "$lib/components/ui/code";`}
	/>
	<Code
		lang="svelte"
		class="w-full"
		variant="secondary"
		hideLines
		code={`<Button variant="outline">
	Button
</Button>`}
	/>
</div>
