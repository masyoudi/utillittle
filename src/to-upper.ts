import toChar from "./to-char";

/**
 * Converts `value` to uppercase.
 * @param {string} value The value to convert.
 * @returns {string} Returns string value converted to uppercase.
 * @example
 *
 * toUpper("foo bar");
 * // => "FOO BAR"
 *
 * toUpper("Foo Bar");
 * // => "FOO BAR"
 */
export function toUpper(value: string): string {
  return toChar(value).toUpperCase();
}

export default toUpper;
