import isType from "./is-type";

/**
 * Checks if `value` is `number`
 * @param {*} value any
 * @returns {Boolean}
 */
export function isNumber(value: any): boolean {
  return isType(value, "number");
}

export default isNumber;
