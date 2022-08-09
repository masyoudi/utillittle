"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = void 0;
var tslib_1 = require("tslib");
var is_object_1 = tslib_1.__importDefault(require("./is-object"));
var is_object_tag_1 = tslib_1.__importDefault(require("./is-object-tag"));
var is_type_1 = tslib_1.__importDefault(require("./is-type"));
/**
 * Checks if `value` is a `function`.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is a `function`, else `false`.
 * @example
 *
 * function foo() {}
 *
 * isFunction(foo);
 * // => true
 *
 * isFunction(foo());
 * // => false
 *
 * isFunction(Date);
 * // => true
 */
function isFunction(value) {
    return ((0, is_type_1.default)(value, "function") ||
        ((0, is_object_1.default)(value) && (0, is_object_tag_1.default)(value, "Function")));
}
exports.isFunction = isFunction;
exports.default = isFunction;
