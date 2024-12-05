<!--
	jsrepo 1.17.5
	Installed from github/ieedan/shadcn-ipv4address-input-svelte
	12-5-2024
-->

<script lang="ts">
	import { cn } from '$lib/utils/utils';
	import { safeParseIPv4Address } from '.';
	import { isNumber } from '$lib/utils/is-number';
	import Input from './ipv4address-input-input.svelte';

	type Props = {
		separator?: string;
		/** An IP Address placeholder `0.0.0.0` or `0_0_0_0` or `0 0 0 0` */
		placeholder?: string;
		value?: [number | null, number | null, number | null, number | null];
		class?: string;
	};

	let {
		separator = '.',
		value = $bindable([null, null, null, null]),
		placeholder,
		class: className
	}: Props = $props();

	let parsedPlaceholder = safeParseIPv4Address(placeholder);

	let firstInput = $state<HTMLInputElement>();
	let secondInput = $state<HTMLInputElement>();
	let thirdInput = $state<HTMLInputElement>();
	let fourthInput = $state<HTMLInputElement>();

	const paste = (e: ClipboardEvent) => {
		const data = e.clipboardData?.getData('text');

		if (!data) return;

		const parsed = safeParseIPv4Address(data);

		if (!parsed) return;

		// validates each octet if invalid then sets to null
		value[0] = validate(parsed[0]);
		value[1] = validate(parsed[1]);
		value[2] = validate(parsed[2]);
		value[3] = validate(parsed[3]);
	};

	const validate = (octet: string | null): number | null => {
		if (octet == null) return null;

		if (!isNumber(octet)) return null;

		const val = parseInt(octet);

		if (val < 0 || val > 255) return null;

		return val;
	};
</script>

<div
	class={cn(
		'flex h-10 place-items-center rounded-md border border-border px-3 font-serif',
		className
	)}
>
	<Input
		bind:ref={firstInput}
		goNext={() => secondInput?.focus()}
		bind:value={value[0]}
		placeholder={parsedPlaceholder ? parsedPlaceholder[0] : undefined}
		onpaste={paste}
	/>
	<span class="font-serif">{separator}</span>
	<Input
		bind:ref={secondInput}
		goNext={() => thirdInput?.focus()}
		goPrevious={() => firstInput?.focus()}
		bind:value={value[1]}
		placeholder={parsedPlaceholder ? parsedPlaceholder[1] : undefined}
		onpaste={paste}
	/>
	<span class="font-serif">{separator}</span>
	<Input
		bind:ref={thirdInput}
		goNext={() => fourthInput?.focus()}
		goPrevious={() => secondInput?.focus()}
		bind:value={value[2]}
		placeholder={parsedPlaceholder ? parsedPlaceholder[2] : undefined}
		onpaste={paste}
	/>
	<span class="font-serif">{separator}</span>
	<Input
		bind:ref={fourthInput}
		goPrevious={() => thirdInput?.focus()}
		bind:value={value[3]}
		placeholder={parsedPlaceholder ? parsedPlaceholder[3] : undefined}
		onpaste={paste}
	/>
</div>
