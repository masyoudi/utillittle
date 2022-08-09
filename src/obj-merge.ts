import isUndefined from "./is-undefined";
/**
 * Merge object `value` with `defaults`.
 * @param {object} value The value to merge.
 * @param {object} defaults The default value.
 * @returns {object} Returns merged object.
 * @example
 *
 * objMerge({ valid: true }, { name: "foo", valid: false });
 * // => { valid: true, name: "foo" }
 */
export function objMerge(value: object = {}, defaults: object): object {
  for (let key in defaults) {
    if (isUndefined(value[key])) {
      value[key] = defaults[key];
    }
  }

  return value;
}

export default objMerge;
