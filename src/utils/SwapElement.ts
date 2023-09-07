import { SwapElementProps } from '..';

/**
 * Swap two elements within an array.
 *
 * This function swaps two elements in an array based on the provided indices.
 * @sjuhyeon
 * @template T - The type of elements in the array.
 * @param {SwapElementProps<T>} options - Options for swapping elements.
 * @param {Array<T>} options.array - The array in which elements will be swapped.
 * @param {number} options.firstIndex - The index of the first element to swap.
 * @param {number} options.secondIndex - The index of the second element to swap with the first.
 * @returns {Array<T>} The array with the elements swapped.
 *
 * @example
 * const arr = [1, 2, 3, 4];
 * const swapOptions = {
 *   array: arr,
 *   firstIndex: 1,
 *   secondIndex: 3,
 * };
 * SwapElem(swapOptions);
 * console.log(arr); // Output: [1, 4, 3, 2]
 */
export default function SwapElem<T>(
	options: SwapElementProps<T>
) {
	options.array[options.firstIndex] = options.array.splice(
		options.secondIndex,
		1,
		options.array[options.firstIndex]
	)[0];

	return options.array;
}
