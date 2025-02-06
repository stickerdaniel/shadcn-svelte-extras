<script lang="ts">
	import { CopyButton } from '$lib/components/ui/copy-button';
	import { Clipboard } from 'lucide-svelte';
</script>

<CopyButton text="Hello, World!">
	{#snippet icon()}
		<Clipboard />
	{/snippet}
</CopyButton>
