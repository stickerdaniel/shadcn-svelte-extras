<script lang="ts">
	import { X } from 'lucide-svelte';

	type Props = {
		value: string;
		disabled: boolean;
		active: boolean;
		onDelete: (value: string) => void;
	};

	let { value, disabled, onDelete, active }: Props = $props();
</script>

<div
	class="flex h-6 place-items-center rounded-sm bg-secondary py-0.5 text-sm ring-offset-background transition-all hover:cursor-default hover:bg-secondary/90 aria-selected:bg-secondary/90 aria-selected:ring-2 aria-selected:ring-ring aria-selected:ring-offset-2"
	aria-selected={active}
>
	<span class="px-2">
		{value}
	</span>
	<button type="button" class="mr-1" {disabled} onclick={() => onDelete(value)}>
		<X class="size-4" />
	</button>
</div>
