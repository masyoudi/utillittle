"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isASCII = void 0;
var tslib_1 = require("tslib");
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
// https://stackoverflow.com/questions/14313183/javascript-regex-how-do-i-check-if-the-string-is-ascii-only
/**
 * Checks if `value` is ASCII
 * @param {String} value
 * @param {Boolean} extended
 * @returns {Boolean}
 */
function isASCII(value, extended) {
    return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test((0, to_char_1.default)(value));
}
exports.isASCII = isASCII;
exports.default = isASCII;
