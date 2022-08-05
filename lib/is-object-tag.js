import isObject from "./is-object";
import objToString from "./obj-to-string";
import isString from "./is-string";
/**
 * Get object name
 * @param {Object} value
 * @param {String} tag
 * @returns {Boolean}
 */
export function isObjectTag(value, tag) {
    var valid = isObject(value) && isString(tag);
    return valid ? objToString(value) === "[object " + tag + "]" : false;
}
export default isObjectTag;
