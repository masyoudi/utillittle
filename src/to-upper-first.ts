import toChar from "./to-char";

/**
 * Converts the first character of `value` to uppercase.
 * @param {string} value The value to convert.
 * @returns {string} Returns string value converted to uppercase in first character.
 * @example
 *
 * toUpperFirst("the Foo Bar");
 * // => "The Foo Bar"
 *
 * toUpperFirst("the foo bar");
 * // => "The foo bar"
 */
export function toUpperFirst(value: string): string {
  let str = toChar(value);
  return str.charAt(0).toUpperCase().concat(str.slice(1));
}

export default toUpperFirst;
