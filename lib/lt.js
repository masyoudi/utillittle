"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lt = void 0;
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
function lt(left, right) {
    return left < right;
}
exports.lt = lt;
exports.default = lt;
