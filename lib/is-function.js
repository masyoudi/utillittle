import isType from "./is-type";
/**
 * Checks if `value` is a `function`
 * @param {*} value
 * @returns {Boolean}
 */
export function isFunction(value) {
    return isType(value, "function");
}
export default isFunction;
