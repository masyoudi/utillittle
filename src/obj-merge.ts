import isUndefined from "./is-undefined";
/**
 * Merge object `value` with `defaults`
 * @param {Object} value
 * @param {Object} defaults
 * @returns {Object}
 */
export function objMerge(value: object = {}, defaults: object): object {
  for (let key in defaults) {
    if (!isUndefined(value[key])) {
      value[key] = defaults[key];
    }
  }

  return value;
}

export default objMerge;
