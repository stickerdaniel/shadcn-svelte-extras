<script lang="ts">
	import { cn } from '$lib/utils/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLHeadingElement> {
		class?: string;
	}

	let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<h2 class={cn('mt-6 border-b pb-1 text-2xl font-semibold', className)} {...rest}>
	{@render children?.()}
</h2>
