<script lang="ts">
	import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
	import { Check } from '@lucide/svelte';
	import type { ColorName } from './types';

	let {
		selectedColor = $bindable<ColorName | undefined>(),
		colors
	}: {
		selectedColor?: ColorName;
		colors: ColorName[];
	} = $props();

	// Color mapping object for Tailwind classes
	const colorClasses: Record<ColorName, { base: string; hover: string; selected: string }> = {
		rose: {
			base: 'bg-rose-400',
			hover: 'hover:bg-rose-300',
			selected:
				'data-[state=on]:bg-rose-300 data-[state=on]:ring-offset-2 data-[state=on]:ring-offset-background data-[state=on]:ring-2 data-[state=on]:ring-rose-600'
		},
		pink: {
			base: 'bg-pink-400',
			hover: 'hover:bg-pink-300',
			selected:
				'data-[state=on]:bg-pink-300 data-[state=on]:ring-offset-2 data-[state=on]:ring-offset-background data-[state=on]:ring-2 data-[state=on]:ring-pink-600'
		},
		purple: {
			base: 'bg-purple-400',
			hover: 'hover:bg-purple-300',
			selected:
				'data-[state=on]:bg-purple-300 data-[state=on]:ring-offset-2 data-[state=on]:ring-offset-background data-[state=on]:ring-2 data-[state=on]:ring-purple-600'
		},
		blue: {
			base: 'bg-blue-400',
			hover: 'hover:bg-blue-300',
			selected:
				'data-[state=on]:bg-blue-300 data-[state=on]:ring-offset-2 data-[state=on]:ring-offset-background data-[state=on]:ring-2 data-[state=on]:ring-blue-600'
		},
		teal: {
			base: 'bg-teal-400',
			hover: 'hover:bg-teal-300',
			selected:
				'data-[state=on]:bg-teal-300 data-[state=on]:ring-offset-2 data-[state=on]:ring-offset-background data-[state=on]:ring-2 data-[state=on]:ring-teal-600'
		},
		green: {
			base: 'bg-green-400',
			hover: 'hover:bg-green-300',
			selected:
				'data-[state=on]:bg-green-300 data-[state=on]:ring-offset-2 data-[state=on]:ring-offset-background data-[state=on]:ring-2 data-[state=on]:ring-green-600'
		},
		yellow: {
			base: 'bg-yellow-400',
			hover: 'hover:bg-yellow-300',
			selected:
				'data-[state=on]:bg-yellow-300 data-[state=on]:ring-offset-2 data-[state=on]:ring-offset-background data-[state=on]:ring-2 data-[state=on]:ring-yellow-600'
		},
		orange: {
			base: 'bg-orange-400 text-orange-500',
			hover: 'hover:bg-orange-300',
			selected:
				'data-[state=on]:bg-orange-300 data-[state=on]:ring-offset-2 data-[state=on]:ring-offset-background data-[state=on]:ring-2 data-[state=on]:ring-orange-600'
		}
	};
</script>

<ToggleGroup.Root
	type="single"
	requireSelection={true}
	bind:value={selectedColor}
	class="flex items-center data-[orientation='horizontal']:flex-row data-[orientation='vertical']:flex-col data-[orientation='horizontal']:-space-x-3 data-[orientation='vertical']:-space-y-2"
>
	{#each colors as color (color)}
		<ToggleGroup.Item
			value={color}
			aria-label={`Select color ${color}`}
			class={`transform rounded-full ring-2 ring-background transition-transform duration-75 ease-in-out ${colorClasses[color].base} ${colorClasses[color].hover} ${colorClasses[color].selected} hover:scale-105 active:scale-95 data-[state=on]:scale-105`}
		>
			{#if selectedColor === color}<Check color="" />{/if}
		</ToggleGroup.Item>
	{/each}
</ToggleGroup.Root>
