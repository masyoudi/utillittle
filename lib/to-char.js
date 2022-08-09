"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toChar = void 0;
var tslib_1 = require("tslib");
var is_nil_1 = tslib_1.__importDefault(require("./is-nil"));
/**
 * Converts `value` to `string` / using plain `toString`
 * @param {*} value The value to convert.
 * @returns {string} Returns string.
 * @example
 *
 * toChar(1);
 * // => "1"
 *
 * toChar(null);
 * // => ""
 *
 * toChar(undefined);
 * // => ""
 */
function toChar(value) {
    var str = (0, is_nil_1.default)(value) || (isNaN(value) && !value.length) ? "" : value;
    return String(str);
}
exports.toChar = toChar;
exports.default = toChar;
