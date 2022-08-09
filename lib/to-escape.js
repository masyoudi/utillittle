"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEscape = void 0;
var tslib_1 = require("tslib");
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
/**
 * Escape string in `value`
 * @param {string} value The value to escaped.
 * @returns {string} Returns escaped string.
 * @example
 *
 * toEscape("<script>alert(1)</script>");
 * // => "&lt;script&gt;alert(1)&lt;&#x2F;script&gt;"
 */
function toEscape(value) {
    var map = {
        "&": "&amp;",
        '"': "&quot;",
        "'": "&#x27;",
        "<": "&lt;",
        ">": "&gt;",
        "/": "&#x2F;",
        "\\": "&#x5C;",
        "`": "&#96;",
    };
    return (0, to_char_1.default)(value).replace(/[&"'<>\/\\`]/g, function (m) { return map[m]; });
}
exports.toEscape = toEscape;
exports.default = toEscape;
