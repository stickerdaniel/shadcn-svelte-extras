import { customAlphabet } from 'nanoid';

const ALPHABET = 'abdcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export const useId = (prefix?: string) => {
	return `${prefix ? prefix : ''}-${customAlphabet(ALPHABET)(6)}`;
};
