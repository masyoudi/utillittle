"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperFirst = void 0;
var tslib_1 = require("tslib");
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
/**
 * Converts the first character of `value` to upper case.
 * @param {String} value
 * @returns {String}
 */
function toUpperFirst(value) {
    var str = (0, to_char_1.default)(value);
    return str.charAt(0).toUpperCase().concat(str.slice(1));
}
exports.toUpperFirst = toUpperFirst;
exports.default = toUpperFirst;
