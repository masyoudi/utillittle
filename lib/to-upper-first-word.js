"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperFirstWord = void 0;
var tslib_1 = require("tslib");
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
/**
 * Converts every first character of the word in `value` to uppercase.
 * @param {string} value The value to convert.
 * @returns {string} Returns string value converted to uppercase in every first character of the word.
 * @example
 *
 * toUpperFirstWord("the foo bar");
 * // => "The Foo Bar"
 *
 * toUpperFirstWord("tHe fOO bAr");
 * // => "The Foo Bar"
 */
function toUpperFirstWord(value) {
    return (0, to_char_1.default)(value).replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase().concat(txt.substring(1).toLowerCase());
    });
}
exports.toUpperFirstWord = toUpperFirstWord;
exports.default = toUpperFirstWord;
