<script lang="ts">
	import { cn } from '$lib/utils/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		class?: string;
	}

	let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<span class={cn('rounded-md bg-accent px-1 py-1 font-serif text-sm', className)} {...rest}>
	{@render children?.()}
</span>
