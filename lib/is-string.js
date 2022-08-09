"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = void 0;
var tslib_1 = require("tslib");
var is_type_1 = tslib_1.__importDefault(require("./is-type"));
/**
 * Checks if `value` is `string` or instance of `String` object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if type of `value` is string, else `false`.
 * @example
 *
 * isString("");
 * // => true
 *
 * isString(String(123));
 * // => true
 *
 * isString(null);
 * // => false
 *
 */
function isString(value) {
    return (0, is_type_1.default)(value, "string") || value instanceof String;
}
exports.isString = isString;
exports.default = isString;
