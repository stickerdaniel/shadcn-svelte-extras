<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Button } from '../button';
	import { ChevronsDown, ChevronsUp } from '@lucide/svelte';

	type Category = {
		id: string;
		name: string;
		maxItems: number;
	};

	type SelectedItems = { [key: string]: number | null };

	let {
		selectedItems = $bindable<SelectedItems>(),
		activeTab = $bindable<string>(),
		categories
	} = $props();

	function getPreviewImagePath(category: string, index: number): string {
		return `/avatar-creator/preview/${category}/${index}.svg`;
	}

	function selectItem(categoryId: string, index: number | null) {
		if (selectedItems) {
			selectedItems[categoryId] = index;
		}
	}

	// TODO: Implement scroll functionality for tabs if needed
	function scrollTabs(direction: 'up' | 'down') {
		console.warn('Tab scrolling not implemented yet.');
		// Add logic to scroll the Tabs.List if it overflows
		console.log(`Scroll ${direction}`);
	}
</script>

<Tabs.Root bind:value={activeTab} class="flex w-full gap-2">
	<div class="flex flex-col gap-2">
		<Button
			class="w-full"
			variant="secondary"
			size="icon"
			aria-label="Scroll Up"
			onclick={() => scrollTabs('up')}
		>
			<ChevronsUp class="h-4 w-4" />
		</Button>
		<Tabs.List class="h-auto flex-col items-stretch">
			{#each categories as category (category.id)}
				<Tabs.Trigger value={category.id}>{category.name}</Tabs.Trigger>
			{/each}
		</Tabs.List>
		<Button
			class="w-full"
			variant="secondary"
			size="icon"
			aria-label="Scroll Down"
			onclick={() => scrollTabs('down')}
		>
			<ChevronsDown class="h-4 w-4" />
		</Button>
	</div>

	{#each categories as category (category.id)}
		<Tabs.Content value={category.id} class="mt-0 w-full min-w-[118px]">
			<ScrollArea class="h-full w-full rounded-md border">
				<ToggleGroup.Root
					type="single"
					variant="outline"
					value={selectedItems?.[category.id]?.toString() ?? ''}
					class="flex flex-wrap justify-start gap-1 p-2"
				>
					{#each { length: category.maxItems } as _, index (index)}
						{@const imageSrc = getPreviewImagePath(category.id, index)}
						<ToggleGroup.Item
							value={index.toString()}
							aria-label={`Select ${category.name} ${index + 1}`}
							class="h-14 w-14 p-1"
							onclick={() => selectItem(category.id, index)}
						>
							<img
								src={imageSrc}
								alt={`${category.name} Preview ${index + 1}`}
								class="h-full w-full object-contain"
								loading="lazy"
							/>
						</ToggleGroup.Item>
					{/each}
					{#if category.id === 'accessories' || category.id === 'glasses' || category.id === 'beard' || category.id === 'details'}
						<ToggleGroup.Item
							value="-1"
							aria-label={`Remove ${category.name}`}
							class="h-14 w-14 p-1"
							onclick={() => selectItem(category.id, null)}
							data-state={selectedItems?.[category.id] === null ? 'on' : 'off'}
						>
							<div class="flex h-full w-full items-center justify-center text-muted-foreground">
								None
							</div>
						</ToggleGroup.Item>
					{/if}
				</ToggleGroup.Root>
			</ScrollArea>
		</Tabs.Content>
	{/each}
</Tabs.Root>
