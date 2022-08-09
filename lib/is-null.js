"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNull = void 0;
/**
 * Checks if `value` is `null`.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is `null`.
 * @example
 *
 * isNull(null);
 * // => true
 *
 * isNull("");
 * // => false
 *
 * isNull(undefined);
 * // => false
 *
 */
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
exports.default = isNull;
