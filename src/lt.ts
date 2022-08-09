/**
 * Checks if `left` is less than `right`.
 * @param {*} left The left value to compare.
 * @param {*} right The right value for comparison.
 * @returns {boolean} Returns `true` if `left` is less than `right`, else `false`.
 * @example
 *
 * lt(9, 10);
 * // => true
 *
 * lt(9, 9);
 * // => false
 *
 * lt(9, 8);
 * // => false
 */
export function lt(left: any, right: any): boolean {
  return left < right;
}

export default lt;
