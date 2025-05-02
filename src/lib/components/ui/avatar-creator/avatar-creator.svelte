<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '../button';
	import AvatarPreview from './avatar-preview.svelte';
	import CategorySelector from './category-selector.svelte';

	type Category = {
		id: string;
		name: string;
		maxItems: number;
	};

	const categories: Category[] = [
		{ id: 'face', name: 'Face', maxItems: 5 }, // Example maxItems, adjust as needed
		{ id: 'nose', name: 'Nose', maxItems: 4 },
		{ id: 'mouth', name: 'Mouth', maxItems: 6 },
		{ id: 'eyes', name: 'Eyes', maxItems: 8 },
		{ id: 'eyebrows', name: 'Eyebrows', maxItems: 7 },
		{ id: 'glasses', name: 'Glasses', maxItems: 3 },
		{ id: 'hair', name: 'Hair', maxItems: 10 },
		{ id: 'accessories', name: 'Accessories', maxItems: 4 },
		{ id: 'details', name: 'Details', maxItems: 2 },
		{ id: 'beard', name: 'Beard', maxItems: 5 }
	];

	let selectedItems = $state<{ [key: string]: number | null }>({});
	// Initialize state
	(() => {
		for (const category of categories) {
			// Default to first item, except for optional categories which default to null (None)
			if (
				category.id === 'accessories' ||
				category.id === 'glasses' ||
				category.id === 'beard' ||
				category.id === 'details'
			) {
				selectedItems[category.id] = null;
			} else {
				selectedItems[category.id] = 0;
			}
		}
	})();

	let activeTab = $state(categories[0]?.id ?? '');

	function getPartImagePath(category: string, index: number): string {
		return `/avatar-creator/part/${category}/${category}-${index}.svg`;
	}

	// Derived state for the layers of the avatar preview
	const avatarLayers = $derived(() => {
		// Define desired layer order (render first element first -> bottom layer)
		const layerOrder: string[] = [
			'face',
			'details', // e.g., freckles
			'mouth',
			'nose',
			'eyes',
			'eyebrows',
			'beard',
			'hair',
			'accessories', // e.g., earrings
			'glasses'
		];

		return layerOrder
			.map((categoryId) => {
				const category = categories.find((c) => c.id === categoryId);
				if (!category) return null; // Skip if category doesn't exist in our config

				const selectedIndex = selectedItems[category.id];
				if (selectedIndex !== null && selectedIndex >= 0) {
					return getPartImagePath(category.id, selectedIndex);
				}
				return null;
			})
			.filter((path): path is string => path !== null); // Filter out null/unselected paths
	});

	function saveAvatar() {
		console.log('Saving avatar configuration:', selectedItems);
		// Add logic to save the selectedItems configuration
	}
</script>

<Card.Root class="m-14 w-full max-w-3xl">
	<Card.Header>
		<Card.Title>Avatar Creator</Card.Title>
		<Card.Description>Customize your profile picture.</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex w-full items-start justify-center gap-6">
			<AvatarPreview layers={avatarLayers} />
			<CategorySelector bind:activeTab bind:selectedItems {categories} />
		</div>
	</Card.Content>
	<Card.Footer class="flex justify-end space-x-2">
		<Button onclick={saveAvatar}>Save</Button>
	</Card.Footer>
</Card.Root>
