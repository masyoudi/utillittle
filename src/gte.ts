/**
 * Checks if `left` is greater than or equal `right`.
 * @param {*} left The left value to compare.
 * @param {*} right The right value for comparison.
 * @returns {boolean} Returns `true` if `left` is greater than or equal `right`, else `false`.
 * @example
 *
 * gte(10, 9);
 * // => true
 *
 * gte(10, 10);
 * // => true
 *
 * gte(10, 11);
 * // => false
 */
export function gte(left: any, right: any): boolean {
  return left >= right;
}

export default gte;
