import isObject from "./is-object";
import objToString from "./obj-to-string";
import isString from "./is-string";

/**
 * Get object name
 * @param {Object} value
 * @param {String} tag
 * @returns {Boolean}
 */
export default function isObjectTag(value: any, tag: string): boolean {
  let valid = isObject(value) && isString(tag);
  return valid ? objToString(value) === "[object " + tag + "]" : false;
}
