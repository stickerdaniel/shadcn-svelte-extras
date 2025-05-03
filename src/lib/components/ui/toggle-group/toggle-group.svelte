<script lang="ts" module>
	import { getContext, setContext } from 'svelte';
	import type { ToggleVariants } from '$lib/components/ui/toggle/index.js';
	export function setToggleGroupCtx(props: ToggleVariants) {
		setContext('toggleGroup', props);
	}

	export function getToggleGroupCtx() {
		return getContext<ToggleVariants>('toggleGroup');
	}
</script>

<script lang="ts">
	import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils/utils.js';

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		size = 'default',
		variant = 'default',
		requireSelection = false,
		...restProps
	}: ToggleGroupPrimitive.RootProps &
		ToggleVariants & {
			requireSelection?: boolean;
		} = $props();

	setToggleGroupCtx({
		variant,
		size
	});

	// Store the last valid value to prevent deselection when requireSelection is true
	let lastValue = $state<string | string[] | undefined>(value);

	// Watch for changes in value and enforce requireSelection
	$effect(() => {
		// Only enforce for 'single' type toggle groups
		const isSingle = restProps.type === 'single';

		if (requireSelection && isSingle) {
			// If value is empty but we had a previous value, restore it
			if ((!value || value === '') && lastValue) {
				value = lastValue;
			} else if (value) {
				// Update lastValue when we have a valid selection
				lastValue = value;
			}
		}
	});
</script>

<!--
Discriminated Unions + Destructing (required for bindable) do not
get along, so we shut typescript up by casting `value` to `never`.
-->
<ToggleGroupPrimitive.Root
	bind:value={value as never}
	bind:ref
	class={cn('flex items-center justify-center gap-1', className)}
	{...restProps}
/>
