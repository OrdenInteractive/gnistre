export default function arrayAverage(v: number[]) {
	return v.reduce((x, y) => x + y) / v.length;
}
