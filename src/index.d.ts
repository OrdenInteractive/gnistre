type C_I_O = {
	image: HTMLImageElement;
	x: number;
	y: number;
	w: number;
	h: number;
	onComplete: (image: HTMLImageElement) => void;
	onFail: () => void;
};

export type ClimpImageOptionProps = Readonly<C_I_O>;

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
