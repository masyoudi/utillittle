import isNull from "./is-null";
import isUndefined from "./is-undefined";

/**
 * Checks if `value` is `null` or `undefined`
 * @param {*} value
 * @returns {Boolean}
 */
export default function isNil(value: any): boolean {
  return isNull(value) || isUndefined(value);
}
