import toChar from "./to-char";

/**
 * Converts `value` to lowercase.
 * @param {string} value The value to convert.
 * @returns {string} Returns string value converted to lowercase.
 * @example
 *
 * toLower("foo bar");
 * // => "foo bar"
 *
 * toLower("Foo Bar");
 * // => "foo bar"
 */
export function toLower(value: string): string {
  return toChar(value).toLowerCase();
}

export default toLower;
