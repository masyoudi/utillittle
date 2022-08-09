"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gt = void 0;
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
function gt(left, right) {
    return left > right;
}
exports.gt = gt;
exports.default = gt;
