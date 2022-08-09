"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = void 0;
var tslib_1 = require("tslib");
var is_object_tag_1 = tslib_1.__importDefault(require("./is-object-tag"));
/**
 * Checks if `value` is classified as `Date` object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is an `Date` object, else `false`.
 * @example
 *
 * isDate(new Date());
 * // => true
 *
 * isDate(Date);
 * // => false
 *
 */
function isDate(value) {
    return (0, is_object_tag_1.default)(value, "Date");
}
exports.isDate = isDate;
exports.default = isDate;
