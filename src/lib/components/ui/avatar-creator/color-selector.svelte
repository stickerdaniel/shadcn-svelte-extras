<script lang="ts">
	import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
	import { Check } from '@lucide/svelte';
	import { COLORS, COLOR_SELECTOR_CLASSES, type ColorName } from './AvatarStore.svelte';

	let {
		selectedColor = $bindable<ColorName | undefined>()
	}: {
		selectedColor?: ColorName;
	} = $props();
</script>

<ToggleGroup.Root
	type="single"
	requireSelection={true}
	bind:value={selectedColor}
	class="flex items-center data-[orientation='horizontal']:flex-row data-[orientation='vertical']:flex-col data-[orientation='horizontal']:-space-x-3 data-[orientation='vertical']:-space-y-2"
>
	{#each COLORS as color (color)}
		<ToggleGroup.Item
			value={color}
			aria-label={`Select color ${color}`}
			class={`transform rounded-full ring-2 ring-background transition-transform duration-75 ease-in-out ${COLOR_SELECTOR_CLASSES[color].base} ${COLOR_SELECTOR_CLASSES[color].hover} ${COLOR_SELECTOR_CLASSES[color].selected} hover:scale-105 active:scale-95 data-[state=on]:scale-105`}
		>
			{#if selectedColor === color}<Check color="" />{/if}
		</ToggleGroup.Item>
	{/each}
</ToggleGroup.Root>
