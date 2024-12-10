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

<ShikiProvider>;
		{@render children()}
</ShikiProvider>`
};

export { examples };
