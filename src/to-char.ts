import isNil from "./is-nil";
/**
 * Converts `value` to `string` / using plain `toString`
 * @param {*} value The value to convert.
 * @returns {string} Returns string.
 * @example
 *
 * toChar(1);
 * // => "1"
 *
 * toChar(null);
 * // => ""
 *
 * toChar(undefined);
 * // => ""
 */
export function toChar(value: any): string {
  let str = isNil(value) || (isNaN(value) && !value.length) ? "" : value;
  return String(str);
}

export default toChar;
