import Basic from './basic.svelte';
import basicRaw from './basic.svelte?raw';
import Icon from './icon.svelte';
import iconRaw from './icon.svelte?raw';

const examples = {
	basic: {
		code: basicRaw,
		Component: Basic
	},
	icon: {
		code: iconRaw,
		Component: Icon
	}
};

export { examples };
