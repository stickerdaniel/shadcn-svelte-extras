import Basic from './basic.svelte';
import basicRaw from './basic.svelte?raw';
import Vertical from './vertical.svelte';
import verticalRaw from './vertical.svelte?raw';

const examples = {
	basic: {
		code: basicRaw,
		Component: Basic
	},
	vertical: {
		code: verticalRaw,
		Component: Vertical
	}
};

export { examples };
