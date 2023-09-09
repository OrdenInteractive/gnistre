import Vector2 from './core/math/Vector2';

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
export type ClampFunctionProps = { value: number; min: number; max: number };
export type LerpFunctionProps = { start: number; end: number; amount: number };
export type Vector2Props = {
	x: number;
	y: number;
};
export type RequiredVector2Props = Required<Vector2Props>;
export type OptionalVector2Props = Partial<Vector2Props>;
export type MoveTowardsProps = {
	current: Vector2;
	target: Vector2;
	maxDistance: number;
};
export type TranslateProps = { dx: number; dy: number };
export type TranslatePropsDxOnly = Pick<TranslateProps, 'dx'>;
export type TranslatePropsDyOnly = Pick<TranslateProps, 'dy'>;
export type TripleProductProps = {
	x: Vector2;
	y: Vector2;
	z: Vector2;
	vec: Vector2;
};
export type RandomIntNumberProps = { min: number; max: number; fixed?: number };
export type BrowserDetect = boolean | string;

//#region interfaces

interface ChromeAPI {
	runtime: {
		id?: string;
		sendMessage?: (message: any, cb: (response: any) => void) => void;
	};
}
//#endregion

declare global {
	interface Window {
		chrome?: ChromeAPI;
	}
}
