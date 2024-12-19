<script lang="ts">
	import { Svelte } from '$lib/components/icons';
	import { Code, Copy } from '$lib/components/ui/code';

	let code = `\<script\>
    import { ModeWatcher } from "mode-watcher";    
\</script\>

<ModeWatcher/>`;
</script>

<div class="rounded-lg border border-border">
	<div class="flex place-items-center justify-between border-b border-border p-2">
		<div class="flex place-items-center gap-2">
			<Svelte class="size-4" />
			<span class="font-mono text-sm text-muted-foreground"> src/routes/+layout.svelte </span>
		</div>
		<Copy {code} class="size-7" />
	</div>
	<Code lang="svelte" hideCopy class="border-none" {code} />
</div>
