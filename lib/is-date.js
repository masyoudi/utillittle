import isObjectTag from "./is-object-tag";
/**
 * Checks if `value` is classified as `Date` object
 * @param {*} value
 * @returns {Boolean}
 */
export function isDate(value) {
    return isObjectTag(value, "Date");
}
export default isDate;
