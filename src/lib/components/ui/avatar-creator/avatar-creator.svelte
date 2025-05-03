<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '../button';
	import AvatarPreview from './avatar-preview.svelte';
	import CategorySelector from './category-selector.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	type Category = {
		id: string;
		name: string;
		maxItems: number;
	};

	const categories: Category[] = [
		{ id: 'face', name: 'Face', maxItems: 16 },
		{ id: 'nose', name: 'Nose', maxItems: 14 },
		{ id: 'mouth', name: 'Mouth', maxItems: 20 },
		{ id: 'eyes', name: 'Eyes', maxItems: 14 },
		{ id: 'eyebrows', name: 'Eyebrows', maxItems: 16 },
		{ id: 'glasses', name: 'Glasses', maxItems: 15 },
		{ id: 'hair', name: 'Hair', maxItems: 59 },
		{ id: 'accessories', name: 'Accessories', maxItems: 15 },
		{ id: 'details', name: 'Details', maxItems: 14 },
		{ id: 'beard', name: 'Beard', maxItems: 17 }
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

<Card.Root class="m-4 w-full max-w-4xl">
	<Card.Header>
		<Card.Title>Avatar Creator</Card.Title>
		<Card.Description>Customize your profile picture.</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex w-full flex-col-reverse justify-center gap-4 lg:flex-row">
			<CategorySelector bind:activeTab bind:selectedItems {categories} />
			<div class="flex grow flex-col items-center gap-4">
				<div class="flex grow items-center">
					<AvatarPreview layers={avatarLayers} />
				</div>
				<div class="grid w-full flex-col items-start gap-1.5">
					<Label for="username">Your Username</Label>
					<Input type="username" class="w-full" id="username" placeholder="Display Name" />
					<!--p class="text-sm text-muted-foreground">Enter your username.</p-->
				</div>
			</div>
		</div>
	</Card.Content>
	<Card.Footer class="flex justify-end space-x-2">
		<Button onclick={saveAvatar}>Save</Button>
	</Card.Footer>
</Card.Root>
