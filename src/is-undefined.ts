/**
 * Checks if `value` is `undefined`
 * @param {*} value
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * isUndefined(undefined);
 * // => true
 *
 * isUndefined(null);
 * // => false
 *
 * isUndefined('');
 * // => false
 */
export function isUndefined(value: any): boolean {
  return value === void 0;
}

export default isUndefined;
