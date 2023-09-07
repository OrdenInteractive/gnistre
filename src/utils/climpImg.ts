import { ClimpImageOptions } from '../index.t';

export default function climpImg(options: ClimpImageOptions) {
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');

	let __data__ = '__EMPTY__';

	canvas.width = options.w;
	canvas.height = options.h;

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

			const image = new Image();
			image.setAttribute('src', __data__);

			options.onComplete(image);
		} else {
			__data__ = '__FAILED__';
			options.onFail();
		}
	};
}
