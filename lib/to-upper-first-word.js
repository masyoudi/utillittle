"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperFirstWord = void 0;
var tslib_1 = require("tslib");
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
/**
 * Converts every first character of word in `value` to upper case.
 * @param {String} value
 * @returns {String}
 */
function toUpperFirstWord(value) {
    return (0, to_char_1.default)(value).replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
}
exports.toUpperFirstWord = toUpperFirstWord;
exports.default = toUpperFirstWord;
