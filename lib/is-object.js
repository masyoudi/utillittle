"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
var tslib_1 = require("tslib");
var is_null_1 = tslib_1.__importDefault(require("./is-null"));
var is_type_1 = tslib_1.__importDefault(require("./is-type"));
/**
 * Check if `value` is type of `Object` (e.g: arrays, functions, objects, regexes, `new Number(0)` and `new String('')`)
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is type of `Object`, else `false`.
 * @example
 *
 * isObject({});
 * // => true
 *
 * isObject(null);
 * // => false
 */
function isObject(value) {
    return (0, is_type_1.default)(value, "object") && !(0, is_null_1.default)(value);
}
exports.isObject = isObject;
exports.default = isObject;
