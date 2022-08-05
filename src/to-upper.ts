import toChar from "./to-char";

/**
 * Converts `value` to upper case.
 * @param {String} value
 * @returns {String}
 */
export function toUpper(value: string): string {
  return toChar(value).toUpperCase();
}

export default toUpper;
