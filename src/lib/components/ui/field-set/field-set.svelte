<script lang="ts">
	import { cn } from '$lib/utils/utils';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { tv, type VariantProps } from 'tailwind-variants';

	const style = tv({
		base: 'border border-border rounded-lg flex flex-col w-full h-fit',
		variants: {
			variant: {
				default: 'border-border',
				primary: 'border-primary',
				destructive: 'border-destructive'
			}
		}
	});

	type Variant = VariantProps<typeof style>['variant'];

	interface Props extends WithElementRef<HTMLAttributes<HTMLDivElement>> {
		variant?: Variant;
	}

	let { variant = 'default', children, class: className, ...restProps }: Props = $props();
</script>

<div class={cn(style({ variant }), className)} {...restProps}>
	{@render children?.()}
</div>
