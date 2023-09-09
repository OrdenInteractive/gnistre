import { LerpFunctionProps, ClampFunctionProps } from '../../';

export namespace Mathf {
	/**
	 * Linearly interpolate (lerp) between two values.
	 *
	 * @param {Object} options - The options for the lerp operation.
	 * @param {number} options.start - The starting value.
	 * @param {number} options.end - The ending value.
	 * @param {number} options.amount - The interpolation factor between 0 and 1.
	 * @returns {number} The interpolated value.
	 * @link https://en.wikipedia.org/wiki/Linear_interpolation
	 */
	export function Lerp(options: Required<LerpFunctionProps>) {
		return (
			(1 - options.amount) * options.start + options.amount * options.end
		);
	}

	/**
	 * Clamps a value within a specified range.
	 * @sjuhyeon
	 * @param {Object} options - The options for the clamp operation.
	 * @param {number} options.x - The value to be clamped.
	 * @param {number} options.min - The minimum allowed value.
	 * @param {number} options.max - The maximum allowed value.
	 * @returns {number} The clamped value.
	 */
	export function Clamp(options: ClampFunctionProps): number {
		return Math.min(Math.max(options.value, options.min), options.max);
	}
}
