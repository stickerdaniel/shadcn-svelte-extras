import Basic from './basic.svelte';
import basicRaw from './basic.svelte?raw';

const examples = {
	basic: {
		code: basicRaw,
		Component: Basic
	},
	providerCode: `\<script\>
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
		background-color: var(--shiki-dark-bg) !important;
		font-style: var(--shiki-dark-font-style) !important;
		font-weight: var(--shiki-dark-font-weight) !important;
		text-decoration: var(--shiki-dark-text-decoration) !important;
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
