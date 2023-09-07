/**
 * Convert degrees to radians.
 *
 * This function takes an angle in degrees and converts it to radians using the formula:
 * radians = (degrees * Math.PI) / 180
 * @sjuhyeon
 * @param {number} degrees - The angle in degrees to be converted to radians.
 * @returns {number} The equivalent angle in radians.
 *
 * @example
 * const degrees = 90;
 * const radians = DegToRad(degrees);
 * console.log(radians); // Output: 1.5707963267948966
 */
export default function DegToRad(degrees: number) {
	/**
	 * The equivalent angle in radians.
	 */
	const radians = (degrees * Math.PI) / 180;

	return radians;
}
