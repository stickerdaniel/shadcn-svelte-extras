<script lang="ts">
	import { cn } from '$lib/utils/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLFormAttributes } from 'svelte/elements';
	import { tv, type VariantProps } from 'tailwind-variants';

	const style = tv({
		base: 'border border-border rounded-lg flex flex-col w-full',
		variants: {
			variant: {
				default: 'border-border',
				primary: 'border-primary',
				destructive: 'border-destructive'
			}
		}
	});

	type Variant = VariantProps<typeof style>['variant'];

	interface Props extends HTMLFormAttributes {
		variant?: Variant;

		// snippets
		children: Snippet<[]>;
		footer: Snippet<[]>;
	}

	let { variant = 'default', children, footer, class: className, ...rest }: Props = $props();
</script>

<form {...rest} class={cn(style({ variant }), className)}>
	<div class="p-6">
		{@render children()}
	</div>
	<div class="border-t border-inherit px-6 py-3">
		{@render footer()}
	</div>
</form>
