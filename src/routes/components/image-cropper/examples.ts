import Basic from './basic.svelte';
import basicRaw from './basic.svelte?raw';
import SquarePreview from './square-preview.svelte';
import squarePreviewRaw from './square-preview.svelte?raw';

const examples = {
	basic: {
		code: basicRaw,
		Component: Basic
	},
	squarePreview: {
		code: squarePreviewRaw,
		Component: SquarePreview
	}
};

export { examples };
