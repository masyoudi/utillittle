"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gte = void 0;
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
function gte(left, right) {
    return left >= right;
}
exports.gte = gte;
exports.default = gte;
