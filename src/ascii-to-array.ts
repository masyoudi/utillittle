import toChar from "./to-char";

/**
 * Converts an ASCII `value` to an array.
 * @param {string} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * asciiToArray("123");
 * // => ["1", "2", "3"]
 *
 * asciiToArray("abc");
 * // => ["a", "b", "c"]
 */
export function asciiToArray(value: string): string[] {
  return toChar(value).split("");
}

export default asciiToArray;
