"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectTag = void 0;
var tslib_1 = require("tslib");
var is_object_1 = tslib_1.__importDefault(require("./is-object"));
var obj_to_string_1 = tslib_1.__importDefault(require("./obj-to-string"));
var is_string_1 = tslib_1.__importDefault(require("./is-string"));
/**
 * Checks if `value` matched string `tag` of `"[object Type]"` (eg: `Array`, `Function`, `Error`, `Boolean`, `Number`, `String`, `Date`, `RegExp`)
 * @param {*} value The value to check.
 * @param {string} tag The `"[object Type]"` to comparison.
 * @returns {boolean} Returns boolean `true` if `value` is matched string "[object Type]"`, else `false`.
 * @example
 *
 * isObjectTag(new Date(), "Date");
 * // => true
 *
 * isObjectTag(String, "String");
 * // => false
 *
 * isObjectTag(String(), "String");
 * // => true
 */
function isObjectTag(value, tag) {
    var valid = (0, is_object_1.default)(value) && (0, is_string_1.default)(tag);
    return valid ? (0, obj_to_string_1.default)(value) === "[object " + tag + "]" : false;
}
exports.isObjectTag = isObjectTag;
exports.default = isObjectTag;
