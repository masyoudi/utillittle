import isType from "./is-type";

/**
 * Checks if `value` is `Boolean`
 * @param {*} value
 * @returns {Boolean}
 */
export default function isBoolean(value: any): boolean {
  return isType(value, "boolean");
}
