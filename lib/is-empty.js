"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
/**
 * Checks if `value` is an empty object or collection
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty([""]);
 * // => false
 *
 * isEmpty([]);
 * // => true
 *
 * isEmpty({});
 * // => true
 *
 * isEmpty("");
 * // => true
 *
 * isEmpty(null);
 * // => true
 */
function isEmpty(value) {
    return ([Object, Array].includes((value || {}).constructor) &&
        !Object.entries(value || {}).length);
}
exports.isEmpty = isEmpty;
exports.default = isEmpty;
