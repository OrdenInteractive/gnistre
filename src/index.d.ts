type D = string | HTMLImageElement;

type C_I_O = {
	image: HTMLImageElement;
	x: number;
	y: number;
	w: number;
	h: number;
	onComplete: (opt: D) => void;
	onFail: () => void;
};

export type ClimpImageOptionProps = Readonly<C_I_O>;
export type SwapElementProps<T> = {
	array: T[];
	firstIndex: number;
	secondIndex: number;
};
export type ImageDataProps = Pick<
	ClimpImageOptionProps,
	'image' | 'w' | 'h' | 'onComplete' | 'onFail'
>;

export type DprScaleProps = {
	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D | any;
	w: number;
	h: number;
};

export type ClampFunctionProps = {
	x: number;
	min: number;
	max: number;
};

interface ChromeAPI {
	runtime: {
		id?: string;
		sendMessage?: (message: any, cb: (response: any) => void) => void;
	};
}

export type BrowserDetect = boolean | string;

declare global {
	interface Window {
		chrome?: ChromeAPI;
	}
}
