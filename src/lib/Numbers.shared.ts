export function isInteger(number: number): boolean {
  return !isFloat(number);
}

export function isFloat(number: number): boolean {
  return number.toString().includes(".");
}

export function roundToOneDecimalPlace(number: number): number {
  return Math.round(number * 10) / 10;
}
