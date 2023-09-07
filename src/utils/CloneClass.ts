/**
 * Clone an object preserving its class prototype.
 *
 * This function creates a new object that is a clone of the input object `org`, preserving
 * the prototype chain and properties of the original object.
 * @sjuhyeon
 * @template T - The type of the input object.
 * @param {T} org - The object to be cloned.
 * @returns {T} A new object that is a clone of the input object `org`.
 *
 * @example
 * class MyClass {
 *   constructor(value) {
 *     this.value = value;
 *   }
 *   getValue() {
 *     return this.value;
 *   }
 * }
 *
 * const originalObj = new MyClass(42);
 * const clonedObj = CloneClass(originalObj);
 * console.log(clonedObj instanceof MyClass); // Output: true
 * console.log(clonedObj.getValue()); // Output: 42
 */
export default function CloneClass<T>(org: T): T {
	/**
	 * Create a new object with the same prototype as `org`.
	 */
	const cloned = Object.create(Object.getPrototypeOf(org));

	/**
	 * Copy properties from `org` to the new object.
	 */
	Object.assign(cloned, org);

	return cloned;
}
