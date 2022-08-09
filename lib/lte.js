"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lte = void 0;
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
function lte(left, right) {
    return left <= right;
}
exports.lte = lte;
exports.default = lte;
