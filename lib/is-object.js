import isNull from "./is-null";
import isType from "./is-type";
/**
 * Check if `value` is type of `Object` (e.g: arrays, functions, objects, regexes, `new Number(0)` and `new String('')`)
 * @param {*} value
 * @returns {Boolean}
 */
export function isObject(value) {
    return isType(value, "object") && !isNull(value);
}
export default isObject;
