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
