// add any additional languages here
export const LANGUAGES = ['diff', 'javascript', 'json', 'svelte', 'typescript'] as const;

/** The languages configured for the highlighter */
export type SupportedLanguage = (typeof LANGUAGES)[number];
