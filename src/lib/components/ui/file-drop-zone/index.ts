import FileDropZone, {
	type FileRejectedReason,
	type FileDropZoneProps
} from './file-drop-zone.svelte';

// Utilities for working with file sizes
export const BYTE = 1;
export const KILOBYTE = 1000;
export const MEGABYTE = 1_000_000;

// utilities for limiting accepted files
export const ACCEPT_IMAGE = 'image/*';
export const ACCEPT_VIDEO = 'video/*';
export const ACCEPT_AUDIO = 'audio/*';

export { FileDropZone, type FileRejectedReason, type FileDropZoneProps };
