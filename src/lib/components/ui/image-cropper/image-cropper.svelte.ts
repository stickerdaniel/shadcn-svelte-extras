import type { ReadableBoxedValues, WritableBoxedValues } from '$lib/utils/box';
import { Context } from 'runed';
import type { CropArea, DispatchEvents } from 'svelte-easy-crop';
import { getCroppedImg } from '.';

export type ImageCropperRootProps = WritableBoxedValues<{
	src: string;
	open: boolean;
}>;

class ImageCropperRootState {
	#createdUrls = $state<string[]>([]);
	#previousUrl = $state<string>();
	pixelCrop = $state<CropArea>();

	constructor(readonly opts: ImageCropperRootProps) {}

	onUpload(file: File) {
		this.#previousUrl = this.opts.src.current;
		this.opts.src.current = URL.createObjectURL(file);
		this.opts.open.current = true;
	}

	onCancel() {
		this.opts.src.current = this.#previousUrl ?? '';

		this.opts.open.current = false;
	}

	dispose() {
		for (const url of this.#createdUrls) {
			URL.revokeObjectURL(url);
		}
	}
}

export type ImageCropperTriggerProps = ReadableBoxedValues<{
	id?: string;
}>;

class ImageCropperTriggerState {
	constructor(
		readonly rootState: ImageCropperRootState,
		readonly opts: ImageCropperTriggerProps
	) {}

	onUpload(file: File) {
		this.rootState.onUpload(file);
	}
}

class ImageCropperDialogState {
	constructor(readonly rootState: ImageCropperRootState) {}
}

class ImageCropperCropperState {
	constructor(readonly rootState: ImageCropperRootState) {
		this.onCropComplete = this.onCropComplete.bind(this);
	}

	onCropComplete(e: DispatchEvents['cropcomplete']) {
		this.rootState.pixelCrop = e.pixels;
	}
}

class ImageCropperCropState {
	constructor(readonly rootState: ImageCropperRootState) {
		this.onclick = this.onclick.bind(this);
	}

	async onclick() {
		if (!this.rootState.pixelCrop) return;

		this.rootState.opts.src.current = await getCroppedImg(
			this.rootState.opts.src.current,
			this.rootState.pixelCrop
		);

		this.rootState.opts.open.current = false;
	}
}

class ImageCropperCancelState {
	constructor(readonly rootState: ImageCropperRootState) {
		this.onclick = this.onclick.bind(this);
	}

	onclick() {
		this.rootState.onCancel();
	}
}

const ImageCropperRootContext = new Context<ImageCropperRootState>('ImageCropper.Root');

export const useImageCropperRoot = (props: ImageCropperRootProps) => {
	return ImageCropperRootContext.set(new ImageCropperRootState(props));
};

export const useImageCropperTrigger = (props: ImageCropperTriggerProps) => {
	const rootState = ImageCropperRootContext.get();

	return new ImageCropperTriggerState(rootState, props);
};

export const useImageCropperDialog = () => {
	const rootState = ImageCropperRootContext.get();

	return new ImageCropperDialogState(rootState);
};

export const useImageCropperCropper = () => {
	const rootState = ImageCropperRootContext.get();

	return new ImageCropperCropperState(rootState);
};

export const useImageCropperCrop = () => {
	const rootState = ImageCropperRootContext.get();

	return new ImageCropperCropState(rootState);
};

export const useImageCropperCancel = () => {
	const rootState = ImageCropperRootContext.get();

	return new ImageCropperCancelState(rootState);
};
