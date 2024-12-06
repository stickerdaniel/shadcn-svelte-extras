<script lang="ts">
	import type { Snippet } from "svelte";

    type Props = {
        children: Snippet<[]>;
    }

    let { children }: Props = $props();
</script>

<div class="border border-border rounded-lg flex place-items-center justify-center p-4">
    {@render children()}
</div>