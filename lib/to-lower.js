"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLower = void 0;
var tslib_1 = require("tslib");
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
/**
 * Converts `value` to lowercase.
 * @param {string} value The value to convert.
 * @returns {string} Returns string value converted to lowercase.
 * @example
 *
 * toLower("foo bar");
 * // => "foo bar"
 *
 * toLower("Foo Bar");
 * // => "foo bar"
 */
function toLower(value) {
    return (0, to_char_1.default)(value).toLowerCase();
}
exports.toLower = toLower;
exports.default = toLower;
