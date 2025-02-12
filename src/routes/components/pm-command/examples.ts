import Basic from './basic.svelte';
import basicRaw from './basic.svelte?raw';
import Commands from './commands.svelte';
import commandsRaw from './commands.svelte?raw';
import Variants from './variants.svelte';
import variantsRaw from './variants.svelte?raw';
import Overflow from './overflow.svelte';
import overflowRaw from './overflow.svelte?raw';

const examples = {
	basic: {
		code: basicRaw,
		Component: Basic
	},
	commands: {
		code: commandsRaw,
		Component: Commands
	},
	variants: {
		code: variantsRaw,
		Component: Variants
	},
	overflow: {
		code: overflowRaw,
		Component: Overflow
	}
};

export { examples };
