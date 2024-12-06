import { setContext } from 'svelte';
import { writable } from 'svelte/store';
import { createHighlighter } from 'shiki';
import dark from './dark';
import light from './light';
import type { HighlighterStore } from '.';

const hl: HighlighterStore = writable(undefined);

/** Initializes a highlighter context to be used around the app */
const shiki = () => {
	setContext('highlighter', hl);

	createHighlighter({
		themes: [dark, light],
		langs: ['typescript', 'javascript', 'svelte', 'diff', 'json']
	}).then((highlighter) => hl.set(highlighter));
};

export { shiki };
