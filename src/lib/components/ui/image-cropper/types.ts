import type { DialogContentProps, WithChild, WithChildren } from 'bits-ui';
import type { HTMLInputAttributes } from 'svelte/elements';

export type ImageCropperRootProps = WithChildren<{
	src?: string;
	open?: boolean;
}>;

export type ImageCropperDialogProps = DialogContentProps;

export type ImageCropperTriggerProps = WithChild & HTMLInputAttributes & { id?: string };
