import * as Numbers from "$lib/Numbers.shared";

interface FormatNegativeNumberOptions {
  suffix: string;
  numDigits: number | `notSpecified`;
}
const defaultFormatNegativeNumberOptions: FormatNegativeNumberOptions = {
  suffix: "",
  numDigits: "notSpecified",
};

export function formatNegativeNumber(number: number, suffix = "") {
  if (number >= 0) {
    return number + suffix;
  }
  number = Math.abs(number);
  return `(${number + suffix})`;
}

export function formatNumber(
  number: number,
  formatAs: "dollars" | "percent" | "multiple"
) {
  if (formatAs === "dollars" && number >= 0) {
    return number.toLocaleString();
  } else if (formatAs === "dollars") {
    number = Math.abs(number);
    return `(${number.toLocaleString()})`;
  }

  if (formatAs === "multiple" && number >= 0) {
    return number.toFixed(1) + "x";
  } else if (formatAs === "multiple") {
    number = Math.abs(number);
    return `(${number.toFixed(1)}x)`;
  }

  if (formatAs === "percent" && number >= 0) {
    return number + "%";
  } else if (formatAs === "percent") {
    number = Math.abs(number);
    return `(${number}%)`;
  }

  throw new Error(`Unrecognized format: ${formatAs}`);
}

export function formatNull(x: null): string {
  return "NA";
}

export function formatMultiples(amount: number | null): string {
  if (amount == null) {
    return formatNull(amount);
  }

  if (amount > 50) {
    return "NM";
  }

  amount = Numbers.roundToOneDecimalPlace(amount);
  // We want our numbers to always have one decimal place, but by default, integers have zero decimal places.
  // The normal way to do this is to use the toFixed() function, but that results in a lot of complexity in this case.
  if (Numbers.isInteger(amount)) {
    return formatNegativeNumber(amount, ".0x");
  }

  return formatNegativeNumber(amount, "x");
}
