<script lang="ts">
	import { MediaQuery } from 'runed';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import type { Snippet } from 'svelte';

	type Props = {
		open?: boolean;
		children: Snippet<[]>;
	};

	const isDesktop = new MediaQuery('(min-width: 768px)');

	let { open = $bindable(false), children }: Props = $props();
</script>

{#if isDesktop.matches}
	<Dialog.Root bind:open>
		<Dialog.Content class="sm:max-w-xl">
			{@render children()}
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open>
		<Drawer.Content>
			{@render children()}
		</Drawer.Content>
	</Drawer.Root>
{/if}
