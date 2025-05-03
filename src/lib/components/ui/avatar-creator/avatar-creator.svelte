<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import AvatarPreview from './avatar-preview.svelte';
	import CategorySelector from './category-selector.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import {
		createDefaultSelectedItems,
		DEFAULT_CATEGORIES,
		generateAvatarLayers,
		type Category,
		type SelectedItems
	} from './types';

	// Use our shared types and defaults
	const categories: Category[] = DEFAULT_CATEGORIES;
	let selectedItems = $state<SelectedItems>(createDefaultSelectedItems());
	let activeTab = $state(categories[0]?.id ?? '');
	let username = $state('');

	// Derived state for the layers of the avatar preview
	const avatarLayers = $derived(generateAvatarLayers(selectedItems));

	function saveAvatar() {
		console.log('Saving avatar configuration:', {
			username,
			selectedItems
		});
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
