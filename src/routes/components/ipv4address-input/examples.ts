import Basic from './basic.svelte';
import basicRaw from './basic.svelte?raw';
import Placeholder from './placeholder.svelte';
import placeholderRaw from './placeholder.svelte?raw';

const examples = {
	basic: {
		code: basicRaw,
		Component: Basic
	},
	placeholder: {
		code: placeholderRaw,
		Component: Placeholder
	}
};

export { examples };
