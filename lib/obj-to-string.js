"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objToString = void 0;
/**
 * Converts object to string.
 * @param {object} value The value to convert.
 * @returns {string} Returns string.
 * @example
 *
 * objToString({});
 * // => "[object Object]"
 *
 * objToString(/\s/);
 * // => "[object RegExp]"
 *
 * objToString(undefined);
 * // => "[object Undefined]"
 */
function objToString(value) {
    return Object.prototype.toString.call(value);
}
exports.objToString = objToString;
exports.default = objToString;
