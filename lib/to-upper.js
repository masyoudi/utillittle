"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpper = void 0;
var tslib_1 = require("tslib");
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
/**
 * Converts `value` to uppercase.
 * @param {string} value The value to convert.
 * @returns {string} Returns string value converted to uppercase.
 * @example
 *
 * toUpper("foo bar");
 * // => "FOO BAR"
 *
 * toUpper("Foo Bar");
 * // => "FOO BAR"
 */
function toUpper(value) {
    return (0, to_char_1.default)(value).toUpperCase();
}
exports.toUpper = toUpper;
exports.default = toUpper;
