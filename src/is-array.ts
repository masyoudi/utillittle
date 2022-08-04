import isType from "./is-type";

/**
 * Checks if `value` is an `Array`
 * @param {*} value
 * @returns {Boolean}
 */
export default function isArray(value: any): boolean {
  return isType(value, "object") && Array.isArray(value);
}
