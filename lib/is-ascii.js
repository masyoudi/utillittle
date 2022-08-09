"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isASCII = void 0;
var tslib_1 = require("tslib");
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
/**
 * Checks if `value` is ASCII
 * @param {string} value The value to check.
 * @param {boolean} extended
 * @returns {boolean}
 */
function isASCII(value, extended) {
    return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test((0, to_char_1.default)(value));
}
exports.isASCII = isASCII;
exports.default = isASCII;
