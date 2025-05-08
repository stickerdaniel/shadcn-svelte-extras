<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import AvatarPreview from './avatar-preview.svelte';
	import CategorySelector from './category-selector.svelte';
	import ColorSelector from './color-selector.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Dice5 } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import {
		COLORS,
		createDefaultSelectedItems,
		DEFAULT_CATEGORIES,
		generateAvatarLayers,
		AVATAR_BACKGROUND_CLASSES,
		type Category,
		type SelectedItems,
		type ColorName
	} from './types';

	// Use our shared types and defaults
	const categories: Category[] = DEFAULT_CATEGORIES;
	let selectedItems = $state<SelectedItems>(createDefaultSelectedItems());
	let activeTab = $state(categories[0]?.id ?? '');
	let username = $state('');
	let selectedAvatarColorName = $state<ColorName>(COLORS[0] as ColorName);

	// Derived state for the layers of the avatar preview
	const avatarLayers = $derived(generateAvatarLayers(selectedItems));
	const avatarPreviewBgClass = $derived(AVATAR_BACKGROUND_CLASSES[selectedAvatarColorName]);

	// Generate a random avatar configuration
	function generateRandomAvatar() {
		const newSelectedItems: SelectedItems = {};
		const INCLUDE_GLASSES_PROBABILITY = 0.4; // 40% chance to wear glasses

		for (const category of categories) {
			let selectedItemIndex: number;

			switch (category.id) {
				case 'beard':
				case 'accessories':
				case 'details':
					// These categories are optional and default to 'none' (index 0)
					selectedItemIndex = 0;
					break;
				case 'glasses':
					// Glasses are optional with a specific probability
					if (Math.random() < INCLUDE_GLASSES_PROBABILITY && category.maxItems > 1) {
						// Select a random item *other than* 'none' (index 0)
						selectedItemIndex = Math.floor(Math.random() * (category.maxItems - 1)) + 1;
					} else {
						selectedItemIndex = 0; // none
					}
					break;
				default:
					// For other categories, select any random item
					// Ensure maxItems is at least 1 to avoid issues with Math.random() * 0
					selectedItemIndex =
						category.maxItems > 0 ? Math.floor(Math.random() * category.maxItems) : 0;
					break;
			}
			newSelectedItems[category.id] = selectedItemIndex;
		}
		// Update the state
		selectedItems = newSelectedItems;

		// Set a random background color
		const randomColorIndex = Math.floor(Math.random() * COLORS.length);
		selectedAvatarColorName = COLORS[randomColorIndex] as ColorName;
	}

	function saveAvatar() {
		console.log('Saving avatar configuration:', {
			username,
			selectedItems
		});
		// Add logic to save the selectedItems configuration
	}

	// Generate a random avatar on initial load
	onMount(() => {
		generateRandomAvatar();
	});
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
					<AvatarPreview layers={avatarLayers} previewBgClass={avatarPreviewBgClass} />
				</div>
				<div
					class="flex w-full flex-col items-end justify-between gap-4 sm:flex-row-reverse md:flex-row-reverse lg:flex-col lg:items-end"
				>
					<Button
						variant="secondary"
						size="icon"
						onclick={generateRandomAvatar}
						aria-label="Generate random avatar"
					>
						<Dice5 />
					</Button>
					<ColorSelector colors={COLORS as ColorName[]} bind:selectedColor={selectedAvatarColorName}
					></ColorSelector>
				</div>
				<div class="grid w-full flex-col items-start gap-1.5">
					<Label for="username">Your Username</Label>
					<Input
						type="text"
						class="w-full"
						id="username"
						placeholder="Display Name"
						bind:value={username}
					/>
				</div>
			</div>
		</div>
	</Card.Content>
	<Card.Footer class="flex justify-end space-x-2">
		<Button onclick={saveAvatar}>Save</Button>
	</Card.Footer>
</Card.Root>
