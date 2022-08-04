import isObjectTag from "./is-object-tag";

/**
 * Checks if `value` is classified as `Date` object
 * @param {*} value
 * @returns {Boolean}
 */
export default function isDate(value: any): boolean {
  return isObjectTag(value, "Date");
}
