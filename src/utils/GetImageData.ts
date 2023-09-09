import { ImageDataProps } from '../';

/**
 * Get image data from an HTMLImageElement.
 *
 * This function creates a canvas, draws the provided image on it, and returns the resulting image data as a data URL.
 * @sjuhyeon
 * @param {ImageDataProps} options - Options for retrieving image data.
 * @param {HTMLImageElement} options.image - The source image from which to retrieve the data.
 * @param {number} options.w - The width of the canvas used for rendering the image.
 * @param {number} options.h - The height of the canvas used for rendering the image.
 * @param {function} options.onComplete - A callback function to be called when the image data retrieval is successful, providing the data URL.
 * @param {function} options.onFail - A callback function to be called when image data retrieval fails.
 *
 * @example
 * const imageDataOptions = {
 *   image: myImageElement,
 *   w: 200,
 *   h: 150,
 *   onComplete: (dataURL) => {
 *     console.log('Image data retrieved successfully:', dataURL);
 *   },
 *   onFail: () => {
 *     console.error('Image data retrieval failed.');
 *   },
 * };
 * GetImageData(imageDataOptions);
 */

export default function GetImageData(options: ImageDataProps) {
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');

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
			context.drawImage(options.image, 0, 0);
			__data__ = canvas.toDataURL();
			options.onComplete(__data__);
		} else {
			/**
			 * Set __data__ to '__FAILED__' and call the onFail callback.
			 */
			__data__ = '__FAILED__';
			options.onFail();
		}
	};
}
