/**
 * Check if the current browser supports WebGL rendering.
 *
 * This function creates a canvas element and attempts to obtain a WebGL rendering context.
 * If successful, it determines that the browser supports WebGL.
 * @sjuhyeon
 * @returns {boolean} Returns `true` if the browser supports WebGL; otherwise, returns `false`.
 */
export default function isSupportsWebGl(): boolean {
	const canvas = document.createElement('canvas');
	const webGl = canvas.getContext('2d') ?? canvas.getContext('webgl');
	if (webGl && webGl instanceof WebGLRenderingContext) return true;
	else return false;
}
