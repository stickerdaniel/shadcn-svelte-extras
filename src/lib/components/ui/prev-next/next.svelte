<script lang="ts">
	import type { Snippet } from 'svelte';
	import { ChevronRight } from 'lucide-svelte';
	import { cn } from '$lib/utils/utils';
	import { Button, type ButtonProps } from '$lib/components/ui/button';

	interface Props extends ButtonProps {
		children: Snippet<[]>;
	}

	let { children, class: className, ...rest }: Props = $props();
</script>

<Button
	class={cn('flex place-items-center gap-2 pl-4 pr-2', className)}
	variant="outline"
	size="sm"
	{...rest}
>
	{@render children()}
	<ChevronRight class="size-4" />
</Button>
