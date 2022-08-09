/**
 * Checks if `left` is less than or equal `right`.
 * @param {*} left The left value to compare.
 * @param {*} right The right value for comparison.
 * @returns {boolean} Returns `true` if `left` is less than or equal `right`, else `false`.
 * @example
 *
 * lte(9, 10);
 * // => true
 *
 * lte(9, 9);
 * // => true
 *
 * lte(9, 8);
 * // => false
 */
export function lte(left: any, right: any): boolean {
  return left <= right;
}

export default lte;
