"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperFirst = void 0;
var tslib_1 = require("tslib");
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
/**
 * Converts the first character of `value` to uppercase.
 * @param {string} value The value to convert.
 * @returns {string} Returns string value converted to uppercase in first character.
 * @example
 *
 * toUpperFirst("the Foo Bar");
 * // => "The Foo Bar"
 *
 * toUpperFirst("the foo bar");
 * // => "The foo bar"
 */
function toUpperFirst(value) {
    var str = (0, to_char_1.default)(value);
    return str.charAt(0).toUpperCase().concat(str.slice(1));
}
exports.toUpperFirst = toUpperFirst;
exports.default = toUpperFirst;
