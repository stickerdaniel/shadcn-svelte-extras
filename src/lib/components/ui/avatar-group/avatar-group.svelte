<script lang="ts">
	import { cn } from '$lib/utils/utils';
	import type { WithChildren } from 'bits-ui';

	type Props = WithChildren<{
		class?: string;
		orientation?: 'vertical' | 'horizontal';
	}>;

	let { orientation = 'horizontal', class: className, children }: Props = $props();
</script>

<div
	data-orientation={orientation}
	class={cn(
		'group/avatar-group flex items-center data-[orientation="horizontal"]:flex-row data-[orientation="vertical"]:flex-col',
		className
	)}
>
	{@render children?.()}
</div>
