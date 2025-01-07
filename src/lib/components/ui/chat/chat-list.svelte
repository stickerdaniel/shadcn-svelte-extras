<script lang="ts">
	import { cn } from '$lib/utils/utils';
	import { onMount, type Snippet } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { ArrowDown } from 'lucide-svelte';
	import { scale } from 'svelte/transition';

	type Props = {
		class?: string;
		children?: Snippet<[]>;
	};

	let { children, class: className }: Props = $props();

	let ref = $state<HTMLDivElement>();
	// Prevents movement on page load
	let canScrollSmooth = $state(false);
	let scrollY = $state(0);

	onMount(() => {
		// this way we scroll to bottom every time a new message appears
		// you can customize this so that it only scrolls when certain conditions are met
		if (ref) {
			const observer = new MutationObserver((records) => {
				// prevent scroll when adding the scroll to bottom button
				for (const record of records) {
					for (const node of record.addedNodes) {
						if (
							node.hasOwnProperty('getAttribute') &&
							(node as HTMLElement).getAttribute('data-scroll-to-bottom')
						) {
							return;
						}
					}
				}

				ref?.scrollTo(0, ref.scrollHeight);
			});

			observer.observe(ref, { childList: true });

			ref.scrollTo(0, ref.scrollHeight);
		}

		canScrollSmooth = true;
	});
</script>

<svelte:window
	onresize={() => {
		ref?.scrollTo(0, ref.scrollHeight);
	}}
/>

<div class="relative">
	<div
		class={cn('flex h-full w-full flex-col gap-4 overflow-y-auto p-4', className, {
			'scroll-smooth': canScrollSmooth
		})}
		bind:this={ref}
		onscroll={(e) => {
			scrollY = (e.target as HTMLDivElement).scrollTop;
		}}
	>
		{@render children?.()}
	</div>
	{#if scrollY + ref?.offsetHeight < ref?.scrollHeight}
		<div in:scale={{ start: 0.85, duration: 100 }} out:scale={{ start: 0.85, duration: 100 }}>
			<Button
				onclick={() => ref?.scrollTo(0, ref.scrollHeight)}
				variant="outline"
				size="icon"
				class="absolute bottom-2 left-1/2 inline-flex -translate-x-1/2 transform rounded-full shadow-md"
				data-scroll-to-bottom
			>
				<ArrowDown />
			</Button>
		</div>
	{/if}
</div>
