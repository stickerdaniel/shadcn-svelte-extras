import Basic from './basic.svelte';
import basicRaw from './basic.svelte?raw';
import Loading from './loading.svelte';
import loadingRaw from './loading.svelte?raw';

const examples = {
	basic: {
		code: basicRaw,
		Component: Basic
	},
	loading: {
		code: loadingRaw,
		Component: Loading
	}
};

export { examples };
