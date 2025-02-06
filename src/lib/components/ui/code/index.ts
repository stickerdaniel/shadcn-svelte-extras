import type { Writable } from 'svelte/store';
import Code from './code.svelte';
import Copy from './copy.svelte';
import ShikiProvider from './shiki-provider.svelte';
import type { HighlighterCore } from 'shiki';
import { context } from '$lib/utils/context-provider';

const HIGHLIGHTER_CONTEXT_KEY = 'shiki-highlighter';

/** Used to access the highlighter context provided by `<ShikiProvider/>`. */
export const shikiContext = context<HighlighterCore | undefined>(HIGHLIGHTER_CONTEXT_KEY);

export type HighlighterStore = Writable<HighlighterCore | undefined>;

export { Code, Copy, ShikiProvider };
