/**
 * Generate a unique identifier.
 *
 * This function generates a unique identifier composed of random hexadecimal characters and hyphens.
 * @sjuhyeon
 * @returns {string} A unique identifier in the format 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.
 *
 * @example
 * const uniqueId = GenerateUniqueId();
 * console.log(uniqueId); // Output: 'a1b2-c3d4-e5f6-1a2b-c3d4e5f6a7b8'
 */
export default function GenerateUniqueId() {
	function chr() {
		return Math.random().toString(16).slice(-4);
	}

	return (
		chr() +
		chr() +
		'-' +
		chr() +
		'-' +
		chr() +
		'-' +
		chr() +
		'-' +
		chr() +
		chr() +
		chr()
	);
}
