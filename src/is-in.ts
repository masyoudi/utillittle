import isFunction from "./is-function";
import isObjectTag from "./is-object-tag";
import isPlainObject from "./is-plain-object";
import toChar from "./to-char";

/**
 * Checks if `value` is in `options` (`options` can be `Object` or `Array`)
 * @param {String} value
 * @param {*} options
 * @returns {Boolean}
 */
export function isIn(value: string, options: any): boolean {
  let str = toChar(value);
  let result = false;

  if (isObjectTag(options, "Array")) {
    const arr: Array<any> = [];
    for (let i in options) {
      if ({}.hasOwnProperty.call(options, i)) {
        arr[i] = toChar(options[i]);
      }
    }

    result = arr.indexOf(str) >= 0;
  } else if (isPlainObject(options)) {
    result = options.hasOwnProperty(str);
  } else if (options && isFunction(options.indexOf)) {
    result = options.indexOf(str) >= 0;
  }

  return result;
}

export default isIn;
