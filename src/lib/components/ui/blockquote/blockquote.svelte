<script lang="ts">
	import type { HTMLBlockquoteAttributes } from 'svelte/elements';
	import { tv, type VariantProps } from 'tailwind-variants';
	import { cn } from '$lib/utils/utils';

	const style = tv({
		base: 'flex flex-col gap-2 rounded-r-md border-l-4 border-border bg-secondary/50 px-4 py-4',
		variants: {
			variant: {
				default: 'border-border',
				primary: 'border-primary',
				secondary: 'border-secondary',
				destructive: 'border-destructive'
			}
		}
	});

	interface Props extends HTMLBlockquoteAttributes {
		class?: string;
		by?: string;
		variant?: VariantProps<typeof style>['variant'];
	}

	let { class: className, by, variant = 'default', children, ...rest }: Props = $props();
</script>

<div class={cn(style({ variant }))}>
	<blockquote class={cn('text-muted-foreground', className)} {...rest}>
		<p>{@render children?.()}</p>
	</blockquote>
	{#if by}
		<p>- {by}</p>
	{/if}
</div>
