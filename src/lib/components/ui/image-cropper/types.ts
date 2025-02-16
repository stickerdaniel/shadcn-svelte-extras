import type { DialogContentProps, WithChildren } from 'bits-ui';
import type { HTMLInputAttributes } from 'svelte/elements';

export type ImageCropperRootProps = WithChildren<{
	src?: string;
	onCropped?: (url: string) => void;
}>;

export type ImageCropperDialogProps = DialogContentProps;

export type ImageCropperTriggerProps = HTMLInputAttributes & { id?: string };
