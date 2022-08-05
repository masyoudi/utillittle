import isType from "./is-type";

/**
 * Checks if `value` is `string`
 * @param {*} value
 * @returns {Boolean}
 */
export function isString(value: any): boolean {
  return isType(value, "string");
}

export default isString;
