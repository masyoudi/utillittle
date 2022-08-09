"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isError = void 0;
var tslib_1 = require("tslib");
var is_object_1 = tslib_1.__importDefault(require("./is-object"));
var is_object_tag_1 = tslib_1.__importDefault(require("./is-object-tag"));
/**
 * Checks if `value` is `Error` object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is an `Error` object, else `false`.
 * @example
 *
 * isError(new Error(""));
 * // => true
 *
 * isError(Error);
 * // => false
 *
 */
function isError(value) {
    return ((0, is_object_1.default)(value) && ((0, is_object_tag_1.default)(value, "Error") || value instanceof Error));
}
exports.isError = isError;
exports.default = isError;
