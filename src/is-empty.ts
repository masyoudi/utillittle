/**
 * Checks if `value` is an empty object or collection
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty([""]);
 * // => false
 *
 * isEmpty([]);
 * // => true
 *
 * isEmpty({});
 * // => true
 *
 * isEmpty("");
 * // => true
 *
 * isEmpty(null);
 * // => true
 */
export function isEmpty(value: any): boolean {
  return (
    [Object, Array].includes((value || {}).constructor) &&
    !Object.entries(value || {}).length
  );
}

export default isEmpty;
