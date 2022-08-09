"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlainObject = void 0;
var tslib_1 = require("tslib");
var is_null_1 = tslib_1.__importDefault(require("./is-null"));
var is_type_1 = tslib_1.__importDefault(require("./is-type"));
/**
 * Checks if `value` is a plain object.
 * @param {*} value The value to check
 * @returns {boolean} Returns boolean `true` if `value` is a plain object, else `false`.
 * @example
 *
 * isPlainObject({ name: "foo" });
 * // => true
 *
 * isPlainObject({});
 * // => true
 *
 * isPlainObject([1, 2, 3]);
 * // => false
 *
 * isPlainObject(Object.create(null));
 * // => true
 *
 */
function isPlainObject(value) {
    return !(0, is_null_1.default)(value) && (0, is_type_1.default)(value, "object") && !Array.isArray(value);
}
exports.isPlainObject = isPlainObject;
exports.default = isPlainObject;
