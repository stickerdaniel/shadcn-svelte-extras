import Basic from './basic.svelte';
import basicRaw from './basic.svelte?raw';
import NoLineNumbers from './no-line-numbers.svelte';
import noLineNumbersRaw from './no-line-numbers.svelte?raw';
import Variants from './variants.svelte';
import variantsRaw from './variants.svelte?raw';

const examples = {
	basic: {
		code: basicRaw,
		Component: Basic
	},
	noLineNumbers: {
		code: noLineNumbersRaw,
		Component: NoLineNumbers
	},
	variants: {
		code: variantsRaw,
		Component: Variants
	},
	providerCode: `\<script lang="ts"\>
	import { ShikiProvider } from '$lib/components/ui/code';
	// ...
\</script\>

\<ShikiProvider\>
		{@render children()}
\</ShikiProvider\>`,
	cssCode: `/* Shiki see: https://shiki.matsu.io/guide/dual-themes#class-based-dark-mode */
html.dark .shiki,
html.dark .shiki span {
	color: var(--shiki-dark) !important;
	background-color: transparent !important;
	font-style: var(--shiki-dark-font-style) !important;
	font-weight: var(--shiki-dark-font-weight) !important;
	text-decoration: var(--shiki-dark-text-decoration) !important;
}

/* Remove background from light mode */
html pre.shiki {
	background-color: transparent !important;
}

/* For components that need horizontal scrolling */
.scrollbar-hide {
	-ms-overflow-style: none; /* Internet Explorer and Edge */
	scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
	display: none; /* Chrome, Safari, and Opera */
}`
};

export { examples };
