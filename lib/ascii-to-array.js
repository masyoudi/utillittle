"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asciiToArray = void 0;
var tslib_1 = require("tslib");
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
/**
 * Converts an ASCII `value` to an array.
 * @param {string} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * asciiToArray("123");
 * // => ["1", "2", "3"]
 *
 * asciiToArray("abc");
 * // => ["a", "b", "c"]
 */
function asciiToArray(value) {
    return (0, to_char_1.default)(value).split("");
}
exports.asciiToArray = asciiToArray;
exports.default = asciiToArray;
