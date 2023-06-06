export function isInteger(number: string | number): boolean {
	const pattern = /^\d+$/; // Only allows one or more digits
	return pattern.test(number as string);
}
