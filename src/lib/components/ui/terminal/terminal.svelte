<script lang="ts">
	import { Window } from '$lib/components/ui/window';
	import { cn } from '$lib/utils/utils';
	import type { WithChildren } from 'bits-ui';
	import { useTerminalRoot } from './state.svelte';
	import { onMount } from 'svelte';

	type Props = WithChildren<{
		class?: string;
		delay?: number;
		speed?: number;
		autoplay?: boolean;
	}>;

	let { delay = 0, speed = 1, autoplay = true, children, class: className }: Props = $props();

	const terminal = useTerminalRoot({ delay, speed });

	onMount(() => {
		// we play here so that we don't play before it is visible (on the server)
		if (autoplay) {
			terminal.play();
		}

		return () => {
			terminal.dispose();
		};
	});
</script>

<Window class={cn('', className)}>
	{@render children?.()}
</Window>
