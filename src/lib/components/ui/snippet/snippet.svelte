<script lang="ts">
	import { Copy, Check } from 'lucide-svelte';
	import { cn } from '$lib/utils/utils';
	import { scale } from 'svelte/transition';
	import { tv, type VariantProps } from 'tailwind-variants';

	const style = tv({
		base: 'relative w-full max-w-full rounded-md border bg-background py-2.5 pl-3 pr-12',
		variants: {
			variant: {
				default: 'border-border',
				secondary: 'border-border bg-accent',
				destructive: 'border-destructive bg-destructive',
				primary: 'border-primary bg-primary text-primary-foreground'
			}
		}
	});

	type Variant = VariantProps<typeof style>['variant'];

	type Props = {
		variant?: Variant;
		text: string | string[];
		class?: string;
		onCopy?: () => void;
	};

	let { text, variant = 'default', onCopy = undefined, class: className }: Props = $props();

	let copied = $state(false);

	async function copy() {
		if (typeof text == 'string') {
			await navigator.clipboard.writeText(text);
		} else {
			await navigator.clipboard.writeText(text.join('\n'));
		}

		copied = true;

		onCopy?.();

		setTimeout(() => (copied = false), 750);
	}
</script>

<div class={cn(style({ variant, className: className }))}>
	{#if typeof text == 'string'}
		<pre class={cn('overflow-y-auto whitespace-nowrap text-left font-serif text-sm')}>
			{text}
		</pre>
	{:else}
		{#each text as line}
			<pre class={cn('overflow-y-auto whitespace-nowrap text-left font-serif text-sm')}>
			{line}
		</pre>
		{/each}
	{/if}

	<button
		onclick={copy}
		type="button"
		class="absolute right-3 top-1/2 -translate-y-1/2 transition-opacity ease-in-out hover:text-opacity-80"
	>
		{#if copied}
			<div in:scale={{ start: 0.75, duration: 250 }}>
				<Check class="size-3.5" />
				<span class="sr-only">Copied</span>
			</div>
		{:else}
			<div in:scale={{ start: 0.75, duration: 250 }}>
				<Copy class="size-3.5" />
				<span class="sr-only">Copy</span>
			</div>
		{/if}
	</button>
</div>
