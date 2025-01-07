<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		variant: 'sent' | 'received';
		avatar?: Snippet<[]>;
		children?: Snippet<[]>;
	};

	let { children, variant, avatar }: Props = $props();
</script>

<div
	class="group/chat-bubble flex flex-row place-items-end gap-2 data-[variant='sent']:place-self-end max-w-[80%]"
	data-variant={variant}
>
	{#if avatar}
		<div class="order-1 group-data-[variant='sent']/chat-bubble:order-2">
			{@render avatar()}
		</div>
	{/if}
	<div
		class="order-2 rounded-lg bg-secondary p-4 text-sm group-data-[variant='sent']/chat-bubble:order-1 group-data-[variant='received']/chat-bubble:rounded-bl-none group-data-[variant='sent']/chat-bubble:rounded-br-none group-data-[variant='sent']/chat-bubble:bg-primary group-data-[variant='sent']/chat-bubble:text-primary-foreground"
	>
		{@render children?.()}
	</div>
</div>
