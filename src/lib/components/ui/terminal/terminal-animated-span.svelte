<script lang="ts">
	import { cn } from '$lib/utils/utils';
	import { onDestroy } from 'svelte';
	import { useAnimation } from './state.svelte';
	import type { TerminalAnimationProps } from './types';
	import { fly } from 'svelte/transition';

	let { children, delay = 0, class: className }: TerminalAnimationProps = $props();

	let playAnimation = $state(false);
	let animationSpeed = $state(1);

	const play = (speed: number) => {
		playAnimation = true;
		animationSpeed = speed;
	};

	const animation = useAnimation({ delay, play });

	onDestroy(() => animation.dispose());
</script>

{#if playAnimation}
	<span class={cn('block', className)} in:fly={{ y: -5, duration: 300 / animationSpeed }}>
		{@render children?.()}
	</span>
{/if}
