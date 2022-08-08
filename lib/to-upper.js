"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpper = void 0;
var tslib_1 = require("tslib");
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
/**
 * Converts `value` to upper case.
 * @param {String} value
 * @returns {String}
 */
function toUpper(value) {
    return (0, to_char_1.default)(value).toUpperCase();
}
exports.toUpper = toUpper;
exports.default = toUpper;
