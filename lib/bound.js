"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bound = void 0;
/**
 * Asserts `value` is between `min` and `max`.
 * @param {number} value The value to be asserted.
 * @param {number} min The minimum limit.
 * @param {number} max The maximum limit.
 * @returns {number} Returns the asserted number.
 * @example
 *
 * bound(10, 5, 15);
 * // => 10
 *
 * bound(10, 1, 9);
 * // => 9
 */
function bound(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
exports.bound = bound;
exports.default = bound;
