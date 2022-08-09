"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRegExp = void 0;
var tslib_1 = require("tslib");
var is_object_tag_1 = tslib_1.__importDefault(require("./is-object-tag"));
/**
 * Checks if `value` is `RexExp`.
 * @param {*} value The value to check.
 * @returns {Boolean} Returns boolean `true` if `value` is RegExp, else `false`.
 * @example
 *
 * isRegExp(/\s/);
 * // => true
 *
 * isRegExp(null);
 * // => false
 */
function isRegExp(value) {
    return (0, is_object_tag_1.default)(value, "RegExp");
}
exports.isRegExp = isRegExp;
exports.default = isRegExp;
