"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefined = void 0;
/**
 * Checks if `value` is `undefined`
 * @param {*} value
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * isUndefined(undefined);
 * // => true
 *
 * isUndefined(null);
 * // => false
 *
 * isUndefined('');
 * // => false
 */
function isUndefined(value) {
    return value === void 0;
}
exports.isUndefined = isUndefined;
exports.default = isUndefined;
