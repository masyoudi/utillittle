import isObjectTag from "./is-object-tag";

/**
 * Checks if `value` is classified as `Date` object
 * @param {*} value
 * @returns {Boolean}
 */
export function isDate(value: any): boolean {
  return isObjectTag(value, "Date");
}

export default isDate;
