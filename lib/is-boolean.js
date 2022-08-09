"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = void 0;
var tslib_1 = require("tslib");
var is_object_1 = tslib_1.__importDefault(require("./is-object"));
var is_object_tag_1 = tslib_1.__importDefault(require("./is-object-tag"));
var is_type_1 = tslib_1.__importDefault(require("./is-type"));
/**
 * Checks if `value` is a `boolean` or object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is a boolean, else false.
 * @example
 *
 * isBoolean(true);
 * // => true
 *
 * isBoolean(false);
 * // => true
 *
 * isBoolean(null);
 * // => false
 */
function isBoolean(value) {
    return ((0, is_type_1.default)(value, "boolean") ||
        ((0, is_object_1.default)(value) && (0, is_object_tag_1.default)(value, "Boolean")));
}
exports.isBoolean = isBoolean;
exports.default = isBoolean;
