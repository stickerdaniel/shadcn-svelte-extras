<!-- src/lib/components/ui/avatar-creator/avatar-creator.svelte -->
<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Button } from '../button';
	import DemoSvg from '@lucide/svelte/icons/bold';
	import { ChevronsDown, ChevronsUp, Space } from '@lucide/svelte';
</script>

<Card.Root class="m-14 w-full">
	<Card.Header>
		<Card.Title>Avatar Creator</Card.Title>
		<Card.Description>Change your profile picture.</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex w-full items-center justify-center gap-4">
			<Avatar.Root class="h-40 w-40">
				<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>

			<Tabs.Root value="face" class=" flex w-full gap-2">
				<div class="flex flex-col gap-2">
					<Button variant="secondary"><ChevronsUp /></Button>
					<Tabs.List class="h-auto flex-col items-stretch">
						<Tabs.Trigger value="face">Face</Tabs.Trigger>
						<Tabs.Trigger value="nose">Nose</Tabs.Trigger>
						<Tabs.Trigger value="mouth">Mouth</Tabs.Trigger>
						<Tabs.Trigger value="eyes">Eyes</Tabs.Trigger>
						<Tabs.Trigger value="eyebrows">Eyebrows</Tabs.Trigger>
						<Tabs.Trigger value="glasses">Glasses</Tabs.Trigger>
						<Tabs.Trigger value="hair">Hair</Tabs.Trigger>
						<Tabs.Trigger value="accessories">Accessories</Tabs.Trigger>
						<Tabs.Trigger value="details">Details</Tabs.Trigger>
						<Tabs.Trigger value="beard">Beard</Tabs.Trigger>
					</Tabs.List>
					<Button variant="secondary"><ChevronsDown /></Button>
				</div>

				<Tabs.Content value="face" class="mt-0 w-full min-w-[118px]">
					<ScrollArea class="h-full w-full rounded-md border">
						<ToggleGroup.Root
							type="single"
							variant="outline"
							class="flex flex-wrap justify-start p-2"
						>
							<ToggleGroup.Item value="a" aria-label="Toggle a" class="h-12 w-12"
								><DemoSvg /></ToggleGroup.Item
							>
							<ToggleGroup.Item value="b" aria-label="Toggle b" class="h-12 w-12"
								><DemoSvg /></ToggleGroup.Item
							>
							<ToggleGroup.Item value="c" aria-label="Toggle c" class="h-12 w-12"
								><DemoSvg /></ToggleGroup.Item
							>
							<ToggleGroup.Item value="d" aria-label="Toggle d" class="h-12 w-12"
								><DemoSvg /></ToggleGroup.Item
							>
							<ToggleGroup.Item value="e" aria-label="Toggle e" class="h-12 w-12"
								><DemoSvg /></ToggleGroup.Item
							>
							<ToggleGroup.Item value="f" aria-label="Toggle f" class="h-12 w-12"
								><DemoSvg /></ToggleGroup.Item
							>
							<ToggleGroup.Item value="e" aria-label="Toggle e" class="h-12 w-12"
								><DemoSvg /></ToggleGroup.Item
							>
							<ToggleGroup.Item value="e" aria-label="Toggle e" class="h-12 w-12"
								><DemoSvg /></ToggleGroup.Item
							>
						</ToggleGroup.Root>
					</ScrollArea>
				</Tabs.Content>
				<Tabs.Content value="nose">nose buttons here</Tabs.Content>
			</Tabs.Root>
		</div>
	</Card.Content>
	<Card.Footer class="flex justify-end space-x-2">
		<Button>Save</Button>
	</Card.Footer>
</Card.Root>
