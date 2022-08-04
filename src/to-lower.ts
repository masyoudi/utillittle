import toChar from "./to-char";

/**
 * Converts `value` to lower case.
 * @param {String} value
 * @returns {String}
 */
export default function toLower(value: string): string {
  return toChar(value).toLowerCase();
}
