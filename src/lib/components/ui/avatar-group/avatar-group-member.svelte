<script lang="ts">
	import AvatarRoot from '../avatar/avatar.svelte';
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: AvatarPrimitive.RootProps = $props();
</script>

<AvatarRoot
	bind:ref
	class={cn(
		'bg-accent ring ring-background first:ml-0 first:mt-0 group-data-[orientation="horizontal"]/avatar-group:-ml-2 group-data-[orientation="vertical"]/avatar-group:-mt-2',
		className
	)}
	{...restProps}
/>
