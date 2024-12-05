<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import Copy from './copy.svelte';
	import { highlighter, THEMES, type Lang } from '$lib/TS/highlighter';
	import type { BundledLanguage, BundledTheme, HighlighterGeneric } from 'shiki';

	type Props = {
		lang?: Lang;
		code: string;
		class?: string;
		copyButtonContainerClass?: string;
		lines?: boolean;
	};

	type $$Props = Props;

	export let lang: $$Props['lang'] = 'bash';
	export let code: $$Props['code'];
	export let copyButtonContainerClass: $$Props['copyButtonContainerClass'] = undefined;
	let className: $$Props['class'] = undefined;
	export { className as class };
	export let showLines: $$Props['lines'] = true;

	$: lines = code.split('\n').length;

	let highlighted: string = code;

	let hl: HighlighterGeneric<BundledLanguage, BundledTheme> | undefined = undefined;

	$: if (hl !== undefined) {
		highlighted = hl.codeToHtml(code, { lang: lang ?? 'bash', themes: THEMES });
	}

	onMount(async () => {
		hl = await highlighter;

		highlighted = hl.codeToHtml(code, {
			lang: lang ?? 'bash',
			themes: THEMES,
		});
	});
</script>

<div class={cn('not-prose relative rounded-lg border border-border bg-background', className)}>
	<div
		class="scrollbar-hide flex max-h-full max-w-full place-items-start overflow-x-auto overflow-y-auto py-6"
	>
		{#if showLines}
			<div class="min-w-14 text-end text-sm leading-[19px]">
				{#each new Array(lines).fill(0) as _, index}
					<span class="text-end font-serif text-muted-foreground">{index + 1}</span>
					<br />
				{/each}
			</div>
		{/if}
		<div class="w-full flex-grow pl-6 text-sm">
			{@html highlighted}
		</div>
	</div>
	<div
		class={cn(
			'absolute right-1 top-1 flex place-items-center justify-center',
			copyButtonContainerClass
		)}
	>
		<slot name="copy-button">
			<Copy {code} />
		</slot>
	</div>
</div>