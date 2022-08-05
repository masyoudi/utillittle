import isType from "./is-type";

/**
 * Checks if `value` is `Boolean`
 * @param {*} value
 * @returns {Boolean}
 */
export function isBoolean(value: any): boolean {
  return isType(value, "boolean");
}

export default isBoolean;
