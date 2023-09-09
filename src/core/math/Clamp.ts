import { ClampFunctionProps } from '../..';

export default function Clamp(options: ClampFunctionProps): number {
	if (options.x < options.min) {
		options.x = options.min;
	} else if (options.x > options.max) {
		options.x = options.max;
	}

	return options.x;
}
