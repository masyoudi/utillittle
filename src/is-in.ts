import isFunction from "./is-function";
import isObjectTag from "./is-object-tag";
import isPlainObject from "./is-plain-object";
import toChar from "./to-char";

/**
 * Checks if `value` is in `values` (`values` can be `Object` or `Array`)
 * @param {string} value The value to check.
 * @param {*} values The values for comparison.
 * @returns {boolean} Returns boolean `true` if `value` is in `values`, else `false`.
 * @example
 *
 * isIn("foo", ["foo", "bar", "baz"]);
 * // => true
 *
 * isIn("fooo", ["foo", "bar", "baz"]);
 * // => false
 *
 * isIn("bar", { bar: "the bar", baz: "the baz"});
 * // => true
 *
 * isIn("foo", { bar: "the bar", baz: "the baz"});
 * // => false
 */
export function isIn(value: string, values: any): boolean {
  let str = toChar(value);
  let result = false;

  if (isObjectTag(values, "Array")) {
    const arr: string[] = [];
    for (let i in values) {
      if ({}.hasOwnProperty.call(values, i)) {
        arr[i] = toChar(values[i]);
      }
    }

    result = arr.indexOf(str) >= 0;
  } else if (isPlainObject(values)) {
    result = values.hasOwnProperty(str);
  } else if (values && isFunction(values.indexOf)) {
    result = values.indexOf(str) >= 0;
  }

  return result;
}

export default isIn;
