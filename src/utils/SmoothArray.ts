import ArrayAverage from './ArrAverage';

/**
 * Smooth an array of numbers using a weighted average.
 *
 * This function applies smoothing to an array of numbers by calculating a weighted average based on a specified variance.
 * @sjuhyeon
 * @param {number[]} vector - The input array of numbers to be smoothed.
 * @param {number} variance - The variance used to adjust the smoothing effect.
 * @returns {number} The smoothed average of the input array.
 *
 * @example
 * const data = [1, 2, 3, 4, 5];
 * const smoothedValue = SmoothArray(data, 0.5);
 * console.log(smoothedValue); // Output: 2.5
 */
export default function SmoothArray(vector: number[], variance: number) {
	const _t = ArrayAverage(vector) * variance;
	const _r = Array(vector.length);

	for (let index = 0; index < vector.length; index++) {
		(function () {
			const preview = index > 0 ? _r[index - 1] : vector[index];
			const next =
				index < vector.length ? vector[index] : vector[index - 1];

			_r[index] = ArrayAverage([
				_t,
				ArrayAverage([preview, vector[index], next]),
			]);
		})();
	}

	return ArrayAverage(_r);
}
