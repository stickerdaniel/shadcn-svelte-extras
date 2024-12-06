export type Route = {
	name: string;
	description: string;
	href: string;
	specifier?: `${string}/${string}`;
};

const map: Record<string, Route[]> = {
	'Getting Started': [
		{
			name: 'Introduction',
			description: 'Introduction to shadcn-svelte-extras.',
			href: '/'
		}
	],
	Components: [
		{
			name: 'Button',
			description: 'An extended button component.',
			href: '/components/button',
			specifier: "ui/button"
		},
		{
			name: 'Code',
			description: 'A code component.',
			href: '/components/code',
			specifier: "ui/code"
		},
		{
			name: 'Field Set',
			description: 'A field set component.',
			href: '/components/field-set',
			specifier: "ui/field-set"
		},
		{
			name: 'IPv4Address Input',
			description: 'An ip address component.',
			href: '/components/ipv4address-input',
			specifier: "ui/ipv4address-input"
		},
		{
			name: 'Light Switch',
			description: 'A light switch component.',
			href: '/components/light-switch',
			specifier: "ui/light-switch"
		},
		{
			name: 'Modal',
			description: 'A responsive dialog component.',
			href: '/components/modal',
			specifier: "ui/code"
		},
		{
			name: 'Snippet',
			description: 'A snippet component.',
			href: '/components/snippet',
			specifier: "ui/snippet"
		},
		{
			name: 'Theme Selector',
			description: 'A theme selector component.',
			href: '/components/theme-selector',
			specifier: "ui/theme-selector"
		}
	]
};

export { map };
