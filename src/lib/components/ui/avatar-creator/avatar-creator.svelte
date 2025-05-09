<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import AvatarPreview from './avatar-preview.svelte';
	import CategorySelector from './category-selector.svelte';
	import ColorSelector from './color-selector.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { Avatar } from './AvatarStore.svelte';
	import { DEFAULT_CATEGORIES, type Category } from './types';

	// Instantiate the Avatar store
	const avatarStore = new Avatar();

	// Local state for UI, like activeTab, if not part of the store's direct responsibility
	// It seems DEFAULT_CATEGORIES is still useful for passing to CategorySelector if it expects the raw list.
	const categories: Category[] = DEFAULT_CATEGORIES;
	let activeTab = $state(categories[0]?.id ?? '');

	// State for the dice number
	let diceNumber = $state(5);

	// Generate a random avatar on initial load using the store's method
	onMount(() => {
		avatarStore.generateRandomAvatar();
		// Also set an initial random dice number on mount
		diceNumber = Math.floor(Math.random() * 6) + 1;
	});

	function handleDiceClick() {
		avatarStore.generateRandomAvatar();
		diceNumber = Math.floor(Math.random() * 6) + 1;
	}
</script>

<Card.Root class="m-4 w-full max-w-4xl">
	<Card.Header>
		<Card.Title>Avatar Creator</Card.Title>
		<Card.Description>Customize your profile picture.</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex w-full flex-col-reverse justify-center gap-4 lg:flex-row">
			<CategorySelector
				bind:activeTab
				bind:selectedItems={avatarStore.selectedItems}
				{categories}
			/>
			<div class="flex grow flex-col items-center gap-4">
				<div class="flex grow items-center">
					<AvatarPreview
						layers={avatarStore.avatarLayers}
						previewBgClass={avatarStore.avatarPreviewBgClass}
					/>
				</div>
				<div
					class="flex w-full flex-col items-end justify-between gap-4 sm:flex-row-reverse md:flex-row-reverse lg:flex-col lg:items-end"
				>
					<Button
						variant="secondary"
						size="icon"
						onclick={handleDiceClick}
						aria-label="Generate random avatar"
						class="transform transition-transform duration-75 ease-in-out hover:scale-105 active:scale-95"
					>
						{#if diceNumber === 1}<Dice1 />
						{:else if diceNumber === 2}<Dice2 />
						{:else if diceNumber === 3}<Dice3 />
						{:else if diceNumber === 4}<Dice4 />
						{:else if diceNumber === 5}<Dice5 />
						{:else if diceNumber === 6}<Dice6 />
						{/if}
					</Button>
					<ColorSelector bind:selectedColor={avatarStore.selectedAvatarColorName}></ColorSelector>
				</div>
				<div class="grid w-full flex-col items-start gap-1.5">
					<Label for="username">Your Username</Label>
					<Input
						type="text"
						class="w-full"
						id="username"
						placeholder="Display Name"
						bind:value={avatarStore.username}
					/>
				</div>
			</div>
		</div>
	</Card.Content>
	<Card.Footer class="flex justify-end space-x-2">
		<Button onclick={avatarStore.saveAvatar}>Save</Button>
	</Card.Footer>
</Card.Root>
