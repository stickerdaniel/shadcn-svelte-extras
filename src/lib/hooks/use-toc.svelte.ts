export type HeadingKind = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type Heading = {
	kind: HeadingKind;
    id?: string;
	level: number;
	label: string;
	children: Heading[];
};

export class UseToc {
	#ref = $state<HTMLElement>();
    #toc = $state<Heading[]>([]);

	// This sets everything up once #ref is bound
	set ref(ref: HTMLElement | undefined) {
		this.#ref = ref;

		if (!this.#ref) return;
        
        this.#toc = getToc(this.#ref);

		// should detect if a heading is added / removed / updated
		const observer = new MutationObserver(() => {
			if (!this.#ref) return;

            this.#toc = getToc(this.#ref);
		});

		observer.observe(this.#ref, { childList: true, subtree: true });
	}

	get ref() {
		return this.#ref;
	}

    get current() {
        return this.#toc;
    }
}

const headingFromHtml = (element: Element): Heading => {
	const kind = element.tagName.toLowerCase() as HeadingKind;

	return {
		kind,
        id: element.id,
		level: parseInt(kind[1]),
		label: element.textContent ?? '',
		children: []
	};
};

/** Gets all of the headings contained in the provided element and create a table of contents.
 *
 * @param el
 * @returns
 */
const getToc = (el: HTMLElement): Heading[] => {
	const headings = Array.from(el.querySelectorAll('h1, h2, h3, h4, h5, h6')).map((h) =>
		headingFromHtml(h)
	);

	if (headings.length === 0) return [];

	const toc: Heading[] = [];

	let i = 0;

	while (i < headings.length) {
		const heading = headings[i];

		const nextIndex = addChildren(headings, heading, i + 1);

		toc.push(heading);

		i = nextIndex;
	}

	return toc;
};

const addChildren = (headings: Heading[], base: Heading, index: number): number => {
	let i = index;

	while (i < headings.length) {
		const sub = headings[i];

		// example: h1 < h2 or h1 = h1
		if (sub.level <= base.level) break;

		const nextIndex = addChildren(headings, sub, i + 1);

		base.children.push(sub);

		i = nextIndex;
	}

	return i;
};
