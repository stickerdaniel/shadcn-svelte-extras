/**
 * Avatar creator type definitions
 */

/**
 * Represents a category of customizable avatar parts
 */
export type Category = {
	id: string;
	name: string;
	maxItems: number;
};

/**
 * Selected items configuration for the avatar
 * Keys are category IDs, values are the selected item index (or null if none selected)
 */
export type SelectedItems = {
	[key: string]: number | null;
};

/**
 * Default categories for the avatar creator
 */
export const DEFAULT_CATEGORIES: Category[] = [
	{ id: 'face', name: 'Face', maxItems: 16 },
	{ id: 'nose', name: 'Nose', maxItems: 14 },
	{ id: 'mouth', name: 'Mouth', maxItems: 20 },
	{ id: 'eyes', name: 'Eyes', maxItems: 14 },
	{ id: 'eyebrows', name: 'Eyebrows', maxItems: 16 },
	{ id: 'glasses', name: 'Glasses', maxItems: 15 },
	{ id: 'hair', name: 'Hair', maxItems: 59 },
	{ id: 'accessories', name: 'Accessories', maxItems: 15 },
	{ id: 'details', name: 'Details', maxItems: 14 },
	{ id: 'beard', name: 'Beard', maxItems: 17 }
];

/**
 * Gets the path to a preview image for a category item
 */
export function getPreviewImagePath(category: string, index: number): string {
	return `/avatar-creator/preview/${category}/${index}.svg`;
}

/**
 * Gets the path to a part image for the avatar preview
 */
export function getPartImagePath(category: string, index: number): string {
	return `/avatar-creator/part/${category}/${category}-${index}.svg`;
}

/**
 * Creates a default selected items configuration
 */
export function createDefaultSelectedItems(): SelectedItems {
	const selectedItems: SelectedItems = {};

	for (const category of DEFAULT_CATEGORIES) {
		selectedItems[category.id] = 0;
	}

	return selectedItems;
}

/**
 * The order in which to render avatar layers (bottom to top)
 */
export const LAYER_ORDER: string[] = [
	'face',
	'details', // e.g., freckles
	'mouth',
	'nose',
	'eyes',
	'eyebrows',
	'beard',
	'hair',
	'accessories', // e.g., earrings
	'glasses'
];

/**
 * Generates the avatar layers based on selected items
 */
export function generateAvatarLayers(selectedItems: SelectedItems): string[] {
	return LAYER_ORDER.map((categoryId) => {
		const selectedIndex = selectedItems[categoryId];
		if (selectedIndex !== null && selectedIndex >= 0) {
			return getPreviewImagePath(categoryId, selectedIndex);
		}
		return null;
	}).filter((path): path is string => path !== null); // Filter out null/unselected paths
}


export const COLORS: string[] = [
	'rose',
	'pink',
	'purple',
	'blue',
	'teal',
	'green',
	'yellow',
	'orange'
]

export type ColorName = (typeof COLORS)[number];

export const AVATAR_BACKGROUND_CLASSES: Record<ColorName, string> = {
	rose: 'bg-rose-400',
	pink: 'bg-pink-400',
	purple: 'bg-purple-400',
	blue: 'bg-blue-400',
	teal: 'bg-teal-400',
	green: 'bg-green-400',
	yellow: 'bg-yellow-400',
	orange: 'bg-orange-400'
};