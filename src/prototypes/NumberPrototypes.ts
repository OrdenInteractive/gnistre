/**
 * @sjuhyeon
 * @description Returns a random integer between two values
 * @param {number} min Minimum
 * @param {number} max Maximum
 */
Number.prototype.randomInt = function ({ max, min }) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * @sjuhyeon
 * @description Returns a random float between two ranges
 * @param {number} min Minimum
 * @param {number} max Maximum
 * @param {number} [fixed=2] Number to fix the float to, optional -> defaults: 2
 */
Number.prototype.randomFloat = function ({ max, min, fixed }) {
	const num = Math.random() * (max - min) + min;
	const result = num.toFixed(fixed ?? 2);

	return Number(result);
};
