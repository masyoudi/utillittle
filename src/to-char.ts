import isNil from "./is-nil";
/**
 * Converts `value` to `string` / using plain `toString`
 * @param {*} value
 * @returns {String}
 */
export function toChar(value: any): string {
  let str = isNil(value) || (isNaN(value) && !value.length) ? "" : value;
  return String(str);
}

export default toChar;
