export type Route = {
	name: string;
	description: string;
	href: string;
	specifier?: `${string}/${string}`;
	source?: string;
};

const map: Record<string, Route[]> = {
	'Getting Started': [
		{
			name: 'Introduction',
			description: 'Introduction to shadcn-svelte-extras.',
			href: '/'
		},
		{
			name: 'Using Extras',
			description: 'How to add and use extras in your project.',
			href: '/docs/using-extras'
		}
	],
	Components: [
		{
			name: 'Button',
			description: 'An extended button component.',
			href: '/components/button',
			specifier: 'ui/button',
			source: "src/lib/components/ui/button/button.svelte"
		},
		{
			name: 'Code',
			description: 'A code component.',
			href: '/components/code',
			specifier: 'ui/code',
			source: "src/lib/components/ui/code/code.svelte"
		},
		{
			name: 'Field Set',
			description: 'A field set component.',
			href: '/components/field-set',
			specifier: 'ui/field-set',
			source: "src/lib/components/ui/field-set/field-set.svelte"
		},
		{
			name: 'IPv4Address Input',
			description: 'An ip address component.',
			href: '/components/ipv4address-input',
			specifier: 'ui/ipv4address-input',
			source: "src/lib/components/ui/ipv4address-input/ipv4address-input.svelte"
		},
		{
			name: 'Light Switch',
			description: 'A light switch component.',
			href: '/components/light-switch',
			specifier: 'ui/light-switch',
			source: "src/lib/components/ui/light-switch/light-switch.svelte"
		},
		{
			name: 'Modal',
			description: 'A responsive dialog component.',
			href: '/components/modal',
			specifier: 'ui/modal',
			source: "src/lib/components/ui/modal/modal.svelte"
		},
		{
			name: 'Snippet',
			description: 'A snippet component.',
			href: '/components/snippet',
			specifier: 'ui/snippet',
			source: "src/lib/components/ui/snippet/snippet.svelte"
		},
		{
			name: 'Theme Selector',
			description: 'A theme selector component.',
			href: '/components/theme-selector',
			specifier: 'ui/theme-selector',
			source: "src/lib/components/ui/theme-selector/theme-selector.svelte"
		}
	]
};

export { map };
