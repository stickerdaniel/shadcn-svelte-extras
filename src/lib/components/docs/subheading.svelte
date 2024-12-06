<script lang="ts">
	import { cn } from "$lib/utils/utils";
	import type { HTMLAttributes } from "svelte/elements";

    interface Props extends HTMLAttributes<HTMLHeadingElement> {
        class?: string;
    }

    let { class: className = undefined, children, ...rest }: Props = $props()
</script>

<h2 class={cn("text-2xl font-semibold mt-6 border-b pb-1", className)} {...rest}>
    {@render children?.()}
</h2>