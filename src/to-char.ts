import isNil from "./is-nil";
/**
 * Converts `value` to `string` / using plain `toString`
 * @param {*} value
 * @returns {String}
 */
export default function toChar(value: any): string {
  return (!isNil(value) ? value : "").toString();
}
