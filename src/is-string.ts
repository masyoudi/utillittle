import isType from "./is-type";

/**
 * Checks if `value` is `string`
 * @param {*} value
 * @returns {Boolean}
 */
export default function isString(value: any): boolean {
  return isType(value, "string");
}
