import Basic from './basic.svelte';
import basicRaw from './basic.svelte?raw';
import SquarePreview from './square-preview.svelte';
import squarePreviewRaw from './square-preview.svelte?raw';
import NoDefaultImage from './no-default-image.svelte';
import noDefaultImageRaw from './no-default-image.svelte?raw';

const examples = {
	basic: {
		code: basicRaw,
		Component: Basic
	},
	squarePreview: {
		code: squarePreviewRaw,
		Component: SquarePreview
	},
	noDefaultImage: {
		code: noDefaultImageRaw,
		Component: NoDefaultImage
	}
};

export { examples };
