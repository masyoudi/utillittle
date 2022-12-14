"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUnescape = void 0;
var tslib_1 = require("tslib");
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
/**
 * Unescape string in `value`
 * @param {string} value The value to unescaped.
 * @returns {string} Returns unescaped string.
 * @example
 *
 * toUnescape("&lt;script&gt;alert(1)&lt;&#x2F;script&gt;")
 * // => "<script>alert(1)</script>"
 */
function toUnescape(value) {
    var map = {
        "&quot;": '"',
        "&#x27;": "'",
        "&lt;": "<",
        "&gt;": ">",
        "&#x2F;": "/",
        "&#x5C;": "\\",
        "&#96;": "`",
        "&amp;": "&",
    };
    var str = (0, to_char_1.default)(value);
    for (var key in map) {
        str = str.replace(new RegExp(key, "g"), map[key]);
    }
    return str;
}
exports.toUnescape = toUnescape;
exports.default = toUnescape;
