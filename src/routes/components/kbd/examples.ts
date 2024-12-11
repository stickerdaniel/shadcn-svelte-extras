import Basic from './basic.svelte';
import basicRaw from './basic.svelte?raw';
import Sizes from './sizes.svelte';
import sizesRaw from './sizes.svelte?raw';
import Variants from './variants.svelte';
import variantsRaw from './variants.svelte?raw';

const examples = {
	basic: {
		code: basicRaw,
		Component: Basic
	},
	sizes: {
		code: sizesRaw,
		Component: Sizes
	},
	variants: {
		code: variantsRaw,
		Component: Variants
	},
};

export { examples };
