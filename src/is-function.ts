import isType from "./is-type";

/**
 * Checks if `value` is a `function`
 * @param {*} value
 * @returns {Boolean}
 */
export default function isFunction(value: any): boolean {
  return isType(value, "function");
}
