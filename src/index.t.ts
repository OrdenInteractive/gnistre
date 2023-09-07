type C_I_O = {
	image: HTMLImageElement;
	x: number;
	y: number;
	w: number;
	h: number;
	onComplete: (image: HTMLImageElement) => void;
	onFail: () => void;
};

export type ClimpImageOptions = Readonly<C_I_O>;
