<script lang="ts">
	import { cn } from '$lib/utils/utils';

	type Props = {
		class?: string;
		plus: number;
	};

	let { plus, class: className }: Props = $props();
</script>

<div
	class={cn(
		'relative flex size-10 items-center justify-center rounded-full bg-accent text-sm ring ring-background group-data-[orientation="horizontal"]/avatar-group:-ml-2 group-data-[orientation="vertical"]/avatar-group:-mt-2',
		className
	)}
>
	<span>+{plus}</span>
</div>
