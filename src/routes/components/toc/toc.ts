import type { Heading } from '$lib/hooks/use-toc.svelte';

export const toc: Heading[] = [
	{
		kind: 'h2',
		id: 'cli',
		level: 2,
		label: 'CLI',
		children: [
			{
				kind: 'h3',
				id: 'cli-installation',
				level: 3,
				label: 'Installation',
				children: []
			}
		]
	},
	{
		kind: 'h2',
		id: 'usage',
		level: 2,
		label: 'Usage',
		children: [
			{
				kind: 'h3',
				id: 'usage-components',
				level: 3,
				label: 'Components',
				children: []
			},
			{
				kind: 'h3',
				id: 'hooks',
				level: 3,
				label: 'Hooks',
				children: []
			}
		]
	}
];
