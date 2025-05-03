<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Button } from '../button';
	import { ChevronsDown, ChevronsUp } from '@lucide/svelte';

	type SelectedItems = { [key: string]: number | null };

	let {
		selectedItems = $bindable<SelectedItems>(),
		activeTab = $bindable<string>(),
		categories
	} = $props();

	function getPreviewImagePath(category: string, index: number): string {
		return `/avatar-creator/preview/${category}/${index}.svg`;
	}

	// TODO: Implement scroll functionality for tabs
	function scrollTabs(direction: 'up' | 'down') {
		// Add logic to go to the next or previous tab
		console.warn(`Scrolling ${direction} is not implemented yet.`);
	}
</script>

<Tabs.Root bind:value={activeTab} class="flex items-start gap-2">
	<!-- Tab list with scroll buttons -->
	<div class="flex h-fit flex-col gap-2">
		<Button
			class="w-full"
			variant="secondary"
			size="icon"
			aria-label="Scroll Up"
			onclick={() => scrollTabs('up')}
		>
			<ChevronsUp class="h-4 w-4" />
		</Button>

		<!-- Tab list -->
		<Tabs.List class="h-fit flex-col items-stretch">
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

	<!-- Tab content -->
	{#each categories as category (category.id)}
		<Tabs.Content value={category.id} class="mt-0 h-fit lg:w-[12.2rem]">
			<ScrollArea class="h-[26.5rem] w-full rounded-md border">
				<ToggleGroup.Root
					type="single"
					variant="outline"
					value={selectedItems?.[category.id]?.toString() ?? ''}
					class="flex flex-wrap justify-start gap-1 p-2"
				>
					{#each { length: category.maxItems } as _, index (index)}
						{@const imageSrc = getPreviewImagePath(category.id, index)}
						<ToggleGroup.Item
							value={category.id + index.toString()}
							aria-label={`Select ${category.name} ${index + 1}`}
							class="h-14 w-14"
						>
							<img
								src={imageSrc}
								alt={`${category.name} Preview ${index + 1}`}
								class="h-full w-full object-contain"
								loading="lazy"
							/>
						</ToggleGroup.Item>
					{/each}
				</ToggleGroup.Root>
			</ScrollArea>
		</Tabs.Content>
	{/each}
</Tabs.Root>
