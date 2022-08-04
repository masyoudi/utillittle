import toChar from "./to-char";

/**
 * Converts `value` to upper case.
 * @param {String} value
 * @returns {String}
 */
export default function toUpper(value: string): string {
  return toChar(value).toUpperCase();
}
