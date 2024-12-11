<script lang="ts">
	import { cn } from '$lib/utils/utils';
	import type { Snippet } from 'svelte';
	import { tv, type VariantProps } from 'tailwind-variants';

	const style = tv({
		base: 'place-items-center justify-center gap-1 rounded-md p-0.5 inline-flex',
		variants: {
			variant: {
				outline: 'border border-border bg-background text-muted-foreground',
				secondary: 'bg-secondary text-muted-foreground',
				primary: 'bg-primary text-primary-foreground'
			},
			size: {
				sm: 'min-w-6 p-0.5 px-1 text-sm gap-1.5',
				default: 'min-w-8 p-1 px-2 gap-1.5',
				lg: 'min-w-9 p-1 px-3 text-lg gap-2'
			}
		}
	});

	type Size = VariantProps<typeof style>['size'];
	type Variant = VariantProps<typeof style>['variant'];

	type Props = {
		class?: string;
		size?: Size;
		variant?: Variant;
		children: Snippet<[]>;
	};

	let { class: className, children, size = 'default', variant = 'outline' }: Props = $props();
</script>

<kbd class={cn(style({ size, variant }), className)}>
	{@render children()}
</kbd>
