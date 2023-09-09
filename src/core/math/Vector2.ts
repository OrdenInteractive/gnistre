import {
	ClampFunctionProps,
	MoveTowardsProps,
	OptionalVector2Props,
	TranslateProps,
	TranslatePropsDxOnly,
	TranslatePropsDyOnly,
	TripleProductProps,
	Vector2Props,
} from '../../';
import DegToRad from '../../utils/DegreeToRadians';
import { Mathf } from './Mathf';

/**
 * A 2D vector class for handling point coordinates and vector operations.
 * @sjuhyeon
 * @class
 * @param {number} x - The x-coordinate of the vector.
 * @param {number} y - The y-coordinate of the vector.
 * @memberof Vector2
 */
export default class Vector2 {
	constructor(public x = 0, public y = 0) {}

	//#endregion static functions

	/**
	 * A constant Vector2 with x and y values both set to 0.
	 * @static
	 * @memberof Vector2
	 * @type {Vector2}
	 */
	public static get ZERO() {
		return new Vector2(0, 0);
	}

	/**
	 * A constant Vector2 with x set to 0 and y set to -1.
	 * @static
	 * @memberof Vector2
	 * @type {Vector2}
	 */
	public static get UP() {
		return new Vector2(0, -1);
	}

	/**
	 * A constant Vector2 with x set to 0 and y set to 1.
	 * @static
	 * @memberof Vector2
	 * @type {Vector2}
	 */
	public static get DOWN() {
		return new Vector2(0, 1);
	}

	/**
	 * A constant Vector2 with x set to -1 and y set to 0.
	 * @static
	 * @memberof Vector2
	 * @type {Vector2}
	 */
	public static get LEFT() {
		return new Vector2(-1, 0);
	}

	/**
	 * A constant Vector2 with x set to 1 and y set to 0.
	 * @static
	 * @memberof Vector2
	 * @type {Vector2}
	 */
	public static get RIGHT() {
		return new Vector2(1, 0);
	}

	/**
	 * Creates a new Vector2 based on optional properties.
	 * If both x and y are omitted or set to 0, returns Vector2.ZERO.
	 * If x is provided but y is omitted or set to 0, returns a Vector2 with x and y set to 0 and the provided x value.
	 * If y is provided but x is omitted or set to 0, returns a Vector2 with x set to 0 and y set to the provided y value.
	 * If both x and y are provided, returns a Vector2 with the provided x and y values.
	 * @static
	 * @memberof Vector2
	 * @param {OptionalVector2Props} opt - An object with optional x and y properties.
	 * @returns {Vector2} A new Vector2 object based on the provided properties.
	 */
	public static CREATE(opt: OptionalVector2Props) {
		if (!opt.x && !opt.y) return this.ZERO;
		if (opt.x && opt.y) return new Vector2(opt.x);
		if (!opt.x && opt.y) return new Vector2(0, opt.y);

		return new Vector2(opt.x, opt.y);
	}

	/**
	 * Converts a Vector2 to a Point2D-like object with x and y properties.
	 * @static
	 * @memberof Vector2
	 * @param {Vector2} vec - A Vector2 to convert to a Point2D-like object.
	 * @returns {{ x: number; y: number }} A Point2D-like object with x and y properties.
	 */
	public static ToPoint2D(vec: Vector2): { x: number; y: number } {
		return {
			x: vec.x,
			y: vec.y,
		};
	}

	/**
	 * Creates a new Vector2 object from a Point2D-like object.
	 * @static
	 * @memberof Vector2
	 * @param {Vector2Props} vec - A Point2D-like object with x and y properties.
	 * @returns {Vector2} A new Vector2 object with x and y values from the provided object.
	 */
	public static FromPoint2D(vec: Vector2Props) {
		return new Vector2(vec.x, vec.y);
	}

	/**
	 * Creates a new Vector2 object from an existing Vector2.
	 * @static
	 * @memberof Vector2
	 * @param {Vector2} vec - An existing Vector2 object.
	 * @returns {Vector2} A new Vector2 object with the same x and y values as the input vector.
	 */
	public static FromVector(vec: Vector2) {
		return new Vector2(vec.x, vec.y);
	}

	//#endregion

	/**
	 * Creates a new Vector2 object with the same x and y values as this vector.
	 * @memberof Vector2
	 * @returns {Vector2} A new Vector2 object with the same x and y values.
	 */
	public Clone() {
		return new Vector2(this.x, this.y);
	}

	/**
	 * Sets the x and y values of this Vector2 object based on the provided properties.
	 * @memberof Vector2
	 * @param {Vector2Props} opt - An object with x and y properties to set.
	 * @returns {Vector2} This Vector2 object with updated values.
	 */
	public SetValues(opt: Vector2Props) {
		this.x = opt.x;
		this.y = opt.y;

		return this;
	}

	/**
	 * Sets the x and y values of this Vector2 object to match another Vector2.
	 * @memberof Vector2
	 * @param {Vector2} vec - A Vector2 whose x and y values will be copied to this vector.
	 * @returns {Vector2} This Vector2 object with updated values.
	 */
	public SetVecValue(vec: Vector2) {
		this.x = vec.x;
		this.y = vec.y;

		return this;
	}

	/**
	 * Adds the x and y values of another Vector2 to this vector.
	 * @memberof Vector2
	 * @param {Vector2} vec - A Vector2 to add to this vector.
	 * @returns {Vector2} This Vector2 object with updated values after addition.
	 */
	public Add(vec: Vector2) {
		this.x = this.x + vec.x;
		this.y = this.y + vec.y;

		return this;
	}

	/**
	 * Adds a number to both the x and y values of this vector.
	 * @memberof Vector2
	 * @param {number} n - The number to add to both the x and y values.
	 * @returns {Vector2} This Vector2 object with updated values after addition.
	 */
	public AddByNumber(n: number) {
		this.x = this.x + n;
		this.y = this.y + n;

		return this;
	}

	/**
	 * Subtracts the x and y values of another Vector2 from this vector.
	 * @memberof Vector2
	 * @param {Vector2} vec - A Vector2 to subtract from this vector.
	 * @returns {Vector2} This Vector2 object with updated values after subtraction.
	 */
	public Substract(vec: Vector2) {
		this.x = this.x - vec.x;
		this.y = this.y - vec.y;

		return this;
	}

	/**
	 * Subtracts a number from both the x and y values of this vector.
	 * @memberof Vector2
	 * @param {number} n - The number to subtract from both the x and y values.
	 * @returns {Vector2} This Vector2 object with updated values after subtraction.
	 */
	public SubstractByNumber(n: number) {
		this.x = this.x - n;
		this.y = this.y - n;

		return this;
	}

	/**
	 * Multiplies the x and y values of this vector by the corresponding values of another Vector2.
	 * @memberof Vector2
	 * @param {Vector2} vec - A Vector2 to multiply with this vector.
	 * @returns {Vector2} This Vector2 object with updated values after multiplication.
	 */
	public Multiply(vec: Vector2) {
		this.x = this.x * vec.x;
		this.y = this.y * vec.y;

		return this;
	}

	/**
	 * Multiplies both the x and y values of this vector by a number.
	 * @memberof Vector2
	 * @param {number} n - The number to multiply both the x and y values by.
	 * @returns {Vector2} This Vector2 object with updated values after multiplication.
	 */
	public MultiplyByNumber(n: number) {
		this.x = this.x * n;
		this.y = this.y * n;

		return this;
	}

	/**
	 * Divides the x and y values of this vector by the corresponding values of another Vector2.
	 * @memberof Vector2
	 * @param {Vector2} vec - A Vector2 to divide this vector by.
	 * @returns {Vector2} This Vector2 object with updated values after division.
	 */
	public Divide(vec: Vector2) {
		this.x = this.x / vec.x;
		this.y = this.y / vec.y;

		return this;
	}

	/**
	 * Divides both the x and y values of this vector by a number.
	 * @memberof Vector2
	 * @param {number} n - The number to divide both the x and y values by.
	 * @returns {Vector2} This Vector2 object with updated values after division.
	 */
	public DivideByNumber(n: number) {
		this.x = this.x / n;
		this.y = this.y / n;

		return this;
	}

	/**
	 * Rounds the x and y values of this vector to the nearest integer.
	 * @memberof Vector2
	 * @returns {Vector2} This Vector2 object with updated rounded values.
	 */
	public Round() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);

		return this;
	}

	/**
	 * Calculates the angle in radians between this vector and another Vector2.
	 * @memberof Vector2
	 * @param {Vector2} vec - Another Vector2 to calculate the angle with.
	 * @returns {number} The angle in radians between the two vectors.
	 */
	public AngleBetween(vec: Vector2) {
		return Math.atan2(
			this.x * vec.y - this.y * vec.x,
			this.x * vec.x + this.y * vec.y
		);
	}

	/**
	 * Calculates the angle in radians from this vector to another Vector2.
	 * @memberof Vector2
	 * @param {Vector2} vec - Another Vector2 to calculate the angle to.
	 * @returns {number} The angle in radians from this vector to the other vector.
	 */
	public AngleTo(vec: Vector2) {
		return Math.atan2(vec.y - this.y, vec.x - this.x);
	}

	/**
	 * Calculates the Euclidean distance between this vector and another Vector2.
	 * @memberof Vector2
	 * @param {Vector2} vec - Another Vector2 to calculate the distance to.
	 * @returns {number} The Euclidean distance between the two vectors.
	 */
	public Distance(vec: Vector2) {
		return Math.sqrt(
			Math.pow(vec.x - this.x, 2) + Math.pow(vec.y - this.y, 2)
		);
	}

	/**
	 * Calculates the squared Euclidean distance between this vector and another Vector2.
	 * @memberof Vector2
	 * @param {Vector2} vec - Another Vector2 to calculate the squared distance to.
	 * @returns {number} The squared Euclidean distance between the two vectors.
	 */
	public DistanceBySquareRoot(vec: Vector2) {
		const res = Math.pow(vec.x - this.x, 2) + Math.pow(vec.y - this.y, 2);
		return res;
	}

	/**
	 * Calculates the dot product of this vector and another Vector2.
	 * @memberof Vector2
	 * @param {Vector2} vec - Another Vector2 to calculate the dot product with.
	 * @returns {number} The dot product of the two vectors.
	 */
	public DotProduct(vec: Vector2) {
		const res = vec.x * this.x + vec.y * this.y;

		return res;
	}

	/**
	 * Calculates the cross product of this vector and another Vector2.
	 * @memberof Vector2
	 * @param {Vector2} vec - Another Vector2 to calculate the cross product with.
	 * @returns {number} The cross product of the two vectors.
	 */
	public CrossProduct(vec: Vector2) {
		const res = vec.x * this.x - vec.y * this.y;

		return res;
	}

	/**
	 * Checks if this vector is equal to another Vector2.
	 * @memberof Vector2
	 * @param {Vector2} vec - Another Vector2 to compare for equality.
	 * @returns {boolean} `true` if the vectors are equal, otherwise `false`.
	 */
	public IsEqual(vec: Vector2) {
		return this.x == vec.x && this.y == vec.y;
	}

	/**
	 * Returns a new Vector2 that is perpendicular to this vector.
	 * Optionally, you can provide another Vector2 to store the result.
	 * @memberof Vector2
	 * @param {Vector2} [vec] - An optional Vector2 to store the perpendicular vector. If not provided, a new Vector2 is created.
	 * @returns {Vector2} A Vector2 object that is perpendicular to this vector.
	 */
	public Perpendicular(vec?: Vector2) {
		let res = vec ?? new Vector2();
		return res.SetValues({ y: -this.y, x: this.x });
	}

	/**
	 * Moves towards a target Vector2 while maintaining a maximum distance.
	 * @memberof Vector2
	 * @param {MoveTowardsProps} opt - An object containing target and current Vector2 objects, and a maximum distance.
	 * @returns {Vector2} A Vector2 object representing the new position after moving towards the target.
	 */
	public MoveToward(opt: MoveTowardsProps) {
		const __vectorX__ = opt.target.x - opt.current.x;
		const __vectorY__ = opt.target.y - opt.current.y;

		const squareRootDistance =
			Math.pow(__vectorX__, 2) + Math.pow(__vectorY__, 2);
		const maxDistanceSquare = Math.pow(opt.maxDistance, 2);

		if (
			squareRootDistance == 0 ||
			(opt.maxDistance >= 0 && squareRootDistance <= maxDistanceSquare)
		) {
			return opt.target;
		}

		const _distance = Math.sqrt(squareRootDistance);

		const x = opt.current.x + (__vectorX__ / _distance) * opt.maxDistance;
		const y = opt.current.y + (__vectorY__ / _distance) * opt.maxDistance;

		return new Vector2(x, y);
	}

	/**
	 * Normalizes this vector, making its magnitude equal to 1, while preserving its direction.
	 * If the vector is already a zero vector (magnitude 0), no changes are made.
	 * @memberof Vector2
	 * @returns {Vector2} This Vector2 object after normalization, or itself if it was already a zero vector.
	 */
	public Normalize() {
		const magnitude = this.Magnitude();

		if (magnitude > 0) this.DivideByNumber(magnitude);

		return this;
	}

	/**
	 * Calculates and returns a normalized vector that points from this vector to another Vector2.
	 * Optionally, you can provide another Vector2 to store the result.
	 * @memberof Vector2
	 * @param {Vector2} [vec] - An optional Vector2 to store the normalized vector. If not provided, a new Vector2 is created.
	 * @returns {Vector2} A normalized Vector2 object pointing from this vector to the provided vector.
	 */
	public GetNormal(vec: Vector2) {
		const rVec = vec || new Vector2();

		return rVec
			.SetValues({
				y: vec.y - this.y,
				x: vec.x - this.x,
			})
			.Normalize();
	}

	/**
	 * Checks if this vector is a zero vector (both x and y values are 0).
	 * @memberof Vector2
	 * @returns {boolean} `true` if this vector is a zero vector, otherwise `false`.
	 */
	public IsZero() {
		return this.x == 0 && this.y == 0;
	}

	/**
	 * Scales this vector by multiplying its components with the corresponding components of another Vector2 (scalar multiplication).
	 * @memberof Vector2
	 * @param {Vector2} scalar - A Vector2 representing the scaling factors for the x and y components.
	 * @returns {Vector2} This Vector2 object with updated values after scaling.
	 */
	public Scale(scalar: Vector2) {
		this.x = this.x * scalar.x;
		this.y = this.y * scalar.y;

		return this;
	}

	/**
	 * Negates the x and y values of this vector by changing their signs.
	 * @memberof Vector2
	 * @returns {Vector2} This Vector2 object with updated negated values.
	 */
	public Negate() {
		this.x = -this.x;
		this.y = -this.y;

		return this;
	}

	/**
	 * Calculates and returns the magnitude (length) of this vector using the Euclidean distance formula.
	 * @memberof Vector2
	 * @returns {number} The magnitude (length) of this vector.
	 */
	public Magnitude() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}

	/**
	 * Calculates and returns the squared magnitude of this vector without taking the square root.
	 * @memberof Vector2
	 * @returns {number} The squared magnitude of this vector.
	 */
	public MagnitudeBySquareRoot() {
		return Math.pow(this.x, 2) + Math.pow(this.y, 2);
	}

	/**
	 * Scales this vector to a specified magnitude (length) while preserving its direction.
	 * @memberof Vector2
	 * @param {number} m - The desired magnitude (length) for this vector.
	 * @returns {Vector2} This Vector2 object with updated values scaled to the specified magnitude.
	 */
	public ScaleToMagnitude(m: number) {
		const k = m / this.Magnitude();

		this.x = this.x * k;
		this.y = this.y * k;

		return this;
	}

	/**
	 * Returns a string representation of this Vector2 object in the format "Vector2(x,y)".
	 * @memberof Vector2
	 * @returns {string} A string representation of this Vector2 object.
	 */
	public ToString() {
		return 'Vector2' + '(' + this.x + ',' + this.y + ')';
	}

	/**
	 * Rounds the x and y values of this vector to the specified precision.
	 * @memberof Vector2
	 * @param {number} p - The number of decimal places to round to.
	 * @returns {Vector2} This Vector2 object with updated rounded values.
	 */
	public ToPrecision(p: number) {
		this.x = Number(this.x.toPrecision(p));
		this.y = Number(this.y.toPrecision(p));

		return this;
	}

	/**
	 * Translates (moves) this vector by adding the specified displacement in both the x and y directions.
	 * @memberof Vector2
	 * @param {TranslateProps} opt - An object containing dx and dy values representing the displacement in the x and y directions.
	 * @returns {Vector2} This Vector2 object with updated coordinates after translation.
	 */
	public Translate(opt: TranslateProps) {
		this.x = this.x + opt.dx;
		this.y = this.y + opt.dy;

		return this;
	}

	/**
	 * Translates (moves) this vector in the x direction by adding the specified displacement.
	 * @memberof Vector2
	 * @param {TranslatePropsDxOnly} opt - An object containing dx representing the displacement in the x direction.
	 * @returns {Vector2} This Vector2 object with updated x coordinate after translation.
	 */
	public TranslateX(opt: TranslatePropsDxOnly) {
		this.x = this.x + opt.dx;

		return this;
	}

	/**
	 * Translates (moves) this vector in the y direction by adding the specified displacement.
	 * @memberof Vector2
	 * @param {TranslatePropsDyOnly} opt - An object containing dy representing the displacement in the y direction.
	 * @returns {Vector2} This Vector2 object with updated y coordinate after translation.
	 */
	public TranslateY(opt: TranslatePropsDyOnly) {
		this.y = this.y + opt.dy;

		return this;
	}

	/**
	 * Calculates the triple dot product of three vectors (x, y, and z) and stores the result in this vector.
	 * @memberof Vector2
	 * @param {TripleProductProps} opt - An object containing three Vector2 vectors (x, y, and z) for the triple dot product calculation.
	 * @returns {Vector2} This Vector2 object with updated values after the triple dot product calculation.
	 */
	public TripleDotProduct(opt: TripleProductProps) {
		const res = opt.vec ?? new Vector2();

		const xz = opt.x.DotProduct(opt.z);
		const yz = opt.y.DotProduct(opt.z);

		return res.SetValues({
			x: opt.x.x * xz - opt.x.x * yz,
			y: opt.y.y * xz - opt.y.y * yz,
		});
	}

	/**
	 * Clamps both the x and y values of this vector within specified minimum and maximum values.
	 * @memberof Vector2
	 * @param {Pick<ClampFunctionProps, 'max' | 'min'>} opt - An object containing maximum and minimum values for clamping.
	 * @returns {Vector2} This Vector2 object with updated values after clamping.
	 */
	public Clamp(opt: Pick<ClampFunctionProps, 'max' | 'min'>) {
		this.x = Mathf.Clamp({ value: this.x, max: opt.max, min: opt.min });
		this.y = Mathf.Clamp({ value: this.y, max: opt.max, min: opt.min });

		return this;
	}

	/**
	 * Clamps the x and y values of this vector to be greater than or equal to a specified minimum value.
	 * @memberof Vector2
	 * @param {number} m - The minimum value to clamp the x and y values to.
	 * @returns {Vector2} This Vector2 object with updated values after clamping.
	 */
	public ClampMin(m: number) {
		if (this.x < m) this.x = m;
		if (this.y < m) this.y = m;

		return this;
	}

	/**
	 * Clamps the x and y values of this vector to be less than or equal to a specified maximum value.
	 * @memberof Vector2
	 * @param {number} m - The maximum value to clamp the x and y values to.
	 * @returns {Vector2} This Vector2 object with updated values after clamping.
	 */
	public ClampMax(m: number) {
		if (this.x > m) this.x = m;
		if (this.y > m) this.y = m;

		return this;
	}

	/**
	 * Rotates this vector around a specified center point by a given angle in degrees.
	 * @memberof Vector2
	 * @param {number} d - The angle in degrees by which to rotate this vector.
	 * @param {Vector2} [c=Vector2.ZERO] - The center point of rotation. Defaults to the origin (Vector2.ZERO).
	 * @returns {void}
	 */
	public Rotate(d: number, c = Vector2.ZERO) {
		const radian = DegToRad(d);

		const centerX = c.x || 0;
		const centerY = c.y || 0;

		const __cos__ = Math.cos(radian);
		const __sin__ = Math.sin(radian);

		const x = this.x - centerX;
		const y = this.y - centerY;

		this.x = x * __cos__ - y * __sin__ + centerX;
		this.y = x * __sin__ + y * __cos__ + centerY;
	}

	/**
	 * Reflects this vector by reversing its direction (multiplying both x and y by -1).
	 * @memberof Vector2
	 * @returns {Vector2} This Vector2 object with updated values after reflection.
	 */
	public Reflect() {
		this.x = this.x * -1;
		this.y = this.y * -1;

		return this;
	}

	/**
	 * Applies the absolute function to both the x and y values of this vector, making them positive.
	 * @memberof Vector2
	 * @returns {Vector2} This Vector2 object with updated absolute values.
	 */
	public Abs() {
		this.x = Math.abs(this.x);
		this.y = Math.abs(this.y);

		return this;
	}
}
