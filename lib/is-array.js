"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = void 0;
var tslib_1 = require("tslib");
var is_type_1 = tslib_1.__importDefault(require("./is-type"));
/**
 * Checks if `value` is an `Array`.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `Array`, else false.
 * @example
 *
 * isArray([]);
 * // => true
 *
 * isArray({});
 * // => false
 */
function isArray(value) {
    return (0, is_type_1.default)(value, "object") && Array.isArray(value);
}
exports.isArray = isArray;
exports.default = isArray;
