import isObject from "./is-object";
import isObjectTag from "./is-object-tag";
import isType from "./is-type";

/**
 * Checks if `value` is a `Number` primitive or object.
 * @param {*} value The value to check.
 * @returns {Boolean}
 */
export function isNumber(value: any): boolean {
  return (
    isType(value, "number") || (isObject(value) && isObjectTag(value, "Number"))
  );
}

export default isNumber;
