/**
 * Checks if `left` is greater than `right`.
 * @param {*} left The left value to compare.
 * @param {*} right The right value for comparison.
 * @returns {boolean} Returns `true` if `left` is greater than `right`, else `false`.
 * @example
 *
 * gt(10, 9);
 * // => true
 *
 * gt(10, 10);
 * // => false
 *
 * gt(10, 11);
 * // => false
 */
export function gt(left: any, right: any): boolean {
  return left > right;
}

export default gt;
