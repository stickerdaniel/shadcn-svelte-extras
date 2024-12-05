/*
	jsrepo 1.17.5
	Installed from github/ieedan/shadcn-ipv4address-input-svelte
	12-5-2024
*/

import IPv4AddressInput from './ipv4address-input.svelte';

/** Attempts to parse the provided address into a valid IP. Returns undefined for
 * undefined returns a valid IP in array form for a valid IP and returns a 0 filled array for a incomplete IP.
 *
 * **This is used only for parsing the placeholder**
 *
 * @param ipv4Address IP Address string to be parsed can be `0.0.0.0` or `0 0 0 0` or `0_0_0_0` or `0 0 0` (partially complete)
 * @returns
 */
export const safeParseIPv4Address = (
	ipv4Address: string | undefined
): [string | null, string | null, string | null, string | null] | undefined => {
	if (ipv4Address === undefined) return undefined;
	let ip = ipv4Address.trim();

	ip = ip.replaceAll('_', '.');
	ip = ip.replaceAll(' ', '.');

	const segments: (string | null)[] = ip.split('.');

	while (segments.length < 4) {
		segments.push(null);
	}

	// @ts-expect-error We know this is 4 we just made sure
	return segments;
};

export type IPv4Address = [number | null, number | null, number | null, number | null];

export { IPv4AddressInput };
