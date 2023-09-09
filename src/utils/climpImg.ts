import { ClimpImageOptionProps } from '../';

/**
 * ClimpImg - Create a cropped image from a given source image.
 *
 * This function creates a cropped image from a source image and provides the result as an HTML `Image` element.
 * @sjuhyeon
 * @param {ClimpImageOptionProps} options - Options for cropping and processing the image.
 * @param {number} options.x - The x-coordinate of the top-left corner of the cropping area.
 * @param {number} options.y - The y-coordinate of the top-left corner of the cropping area.
 * @param {number} options.w - The width of the cropping area.
 * @param {number} options.h - The height of the cropping area.
 * @param {HTMLImageElement} options.image - The source image to be cropped.
 * @param {Function} options.onComplete - A callback function to be called when cropping is complete.
 * @param {Function} options.onFail - A callback function to be called if cropping fails.
 *
 * @example
 * const options = {
 *   x: 10,
 *   y: 20,
 *   w: 100,
 *   h: 80,
 *   image: myImageElement,
 *   onComplete: (croppedImage) => {
 *     document.body.appendChild(croppedImage);
 *   },
 *   onFail: () => {
 *     console.error('Cropping failed.');
 *   },
 * };
 * ClimpImg(options);
 */

export default function ClimpImg(options: ClimpImageOptionProps) {
	/**
	 * Create a new canvas element.
	 *
	 * @type {HTMLCanvasElement}
	 */
	const canvas = document.createElement('canvas');

	/**
	 * Get the 2D rendering context of the canvas.
	 *
	 * @type {CanvasRenderingContext2D|null}
	 */
	const context = canvas.getContext('2d');

	/**
	 * A data URL representing the cropped image.
	 *
	 * @type {string}
	 * @private
	 */
	let __data__ = '__EMPTY__';

	/**
	 * Set the canvas dimensions based on options.
	 */
	canvas.width = options.w;
	canvas.height = options.h;

	/**
	 * Handle the image load event.
	 */
	options.image.onload = () => {
		if (context) {
			context.drawImage(
				options.image,
				options.x,
				options.y,
				options.w,
				options.h,
				0,
				0,
				options.w,
				options.h
			);
			__data__ = canvas.toDataURL();

			/**
			 * Create a new HTML `Image` element for the cropped image.
			 *
			 * @type {HTMLImageElement}
			 */
			const image = new Image();
			image.setAttribute('src', __data__);

			/**
			 * Call the onComplete callback with the cropped image.
			 */
			options.onComplete(image);
		} else {
			/**
			 * Set __data__ to '__FAILED__' and call the onFail callback.
			 */
			__data__ = '__FAILED__';
			options.onFail();
		}
	};
}
