/**
 * Calculate the average of an array of numbers.
 * @sjuhyeon
 * @param {number[]} numbers - An array of numbers for which to calculate the average.
 * @returns {number} The average of the numbers in the array.
 *
 * @example
 * const numbers = [2, 4, 6, 8, 10];
 * const average = ArrayAverage(numbers);
 * console.log(average); // Output: 6
 */
export default function ArrayAverage(numbers: number[]) {
	/**
	 * Sum all the numbers in the array.
	 *
	 * @type {number}
	 */
	const sum = numbers.reduce((x: number, y: number) => x + y, 0);

	/**
	 * The average of the numbers.
	 *
	 * @type {number}
	 */
	const average = sum / numbers.length;

	return average;
}
