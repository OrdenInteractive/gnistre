/**
 * Extract numeric digits from a string and return as a number.
 * @sjuhyeon
 * @param {string} str - The input string from which numeric digits will be extracted.
 * @returns {number} The extracted numeric digits as a number.
 *
 * @example
 * const inputString = "abc123xyz456";
 * const result = ExtractNumbers(inputString);
 * console.log(result); // Output: 123456
 */
export default function ExtractNumbers(str: string) {
	return Number((str.match(/\d/g) || []).join(''));
}
