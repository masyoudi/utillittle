"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrimitive = void 0;
var tslib_1 = require("tslib");
var is_boolean_1 = tslib_1.__importDefault(require("./is-boolean"));
var is_null_1 = tslib_1.__importDefault(require("./is-null"));
var is_number_1 = tslib_1.__importDefault(require("./is-number"));
var is_string_1 = tslib_1.__importDefault(require("./is-string"));
var is_symbol_1 = tslib_1.__importDefault(require("./is-symbol"));
var is_undefined_1 = tslib_1.__importDefault(require("./is-undefined"));
/**
 * Checks if `value` is primitive data type (`null` | `boolean` | `number` | `string` | `symbol` | `undefined`).
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is one of (`null` | `boolean` | `number` | `string` | `symbol` | `undefined`), else `false`.
 * @example
 *
 * isPrimitive(null);
 * // => true
 *
 * isPrimitive(true);
 * // => true
 *
 * isPrimitive(1);
 * // => true
 *
 * isPrimitive("");
 * // => true
 *
 * isPrimitive(undefined);
 * // => true
 */
function isPrimitive(value) {
    return ((0, is_null_1.default)(value) ||
        (0, is_boolean_1.default)(value) ||
        (0, is_number_1.default)(value) ||
        (0, is_string_1.default)(value) ||
        (0, is_symbol_1.default)(value) ||
        (0, is_undefined_1.default)(value));
}
exports.isPrimitive = isPrimitive;
exports.default = isPrimitive;
