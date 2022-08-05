import isNil from "./is-nil";
/**
 * Converts `value` to `string` / using plain `toString`
 * @param {*} value
 * @returns {String}
 */
export function toChar(value: any): string {
  return (!isNil(value) ? value : "").toString();
}

export default toChar;
