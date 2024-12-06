<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet<[]>;
	};

	let { children }: Props = $props();
</script>

<div class="flex place-items-center justify-center rounded-lg border border-border p-4">
	{@render children()}
</div>
