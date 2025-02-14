<script lang="ts">
	import { cn } from '$lib/utils/utils';
	import type { WithChildren } from 'bits-ui';

	type Props = WithChildren<{
        class?: string;
	}>;

	let { children, class: className }: Props = $props();
</script>

<div class={cn("border rounded-lg border-border w-full bg-background aspect-video", className)}>
    <div class="border-b border-inherit p-4">
        <div class="flex items-center gap-2">
            <div class="size-2 bg-[#ef4444] rounded-full"></div>
            <div class="size-2 bg-[#eab308] rounded-full"></div>
            <div class="size-2 bg-[#22c55e] rounded-full"></div>
        </div>
    </div>
    <div class="p-4">
        {@render children?.()}
    </div>
</div>