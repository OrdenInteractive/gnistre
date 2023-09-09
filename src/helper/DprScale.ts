// Special thanks to callumlocke

//https://gist.github.com/callumlocke/cc258a193839691f60dd

import { DprScaleProps } from '..';

export default function scaleCanvas(options: DprScaleProps) {
	// assume the device pixel ratio is 1 if the browser doesn't specify it
	const devicePixelRatio = window.devicePixelRatio || 1;

	// determine the 'backing store ratio' of the canvas context
	const backingStoreRatio =
		options.context.webkitBackingStorePixelRatio ||
		options.context.mozBackingStorePixelRatio ||
		options.context.msBackingStorePixelRatio ||
		options.context.oBackingStorePixelRatio ||
		options.context.backingStorePixelRatio ||
		1;

	// determine the actual ratio we want to draw at
	const ratio = devicePixelRatio / backingStoreRatio;

	if (devicePixelRatio !== backingStoreRatio) {
		// set the 'real' canvas size to the higher width/height
		options.canvas.width = options.w * ratio;
		options.canvas.height = options.h * ratio;

		// ...then scale it back down with CSS
		options.canvas.style.width = options.w + 'px';
		options.canvas.style.height = options.h + 'px';
	} else {
		// this is a normal 1:1 device; just scale it simply
		options.canvas.width = options.w;
		options.canvas.height = options.h;
		options.canvas.style.width = '';
		options.canvas.style.height = '';
	}

	// scale the drawing context so everything will work at the higher ratio
	options.context.scale(ratio, ratio);
}
