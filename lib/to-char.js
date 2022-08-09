"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toChar = void 0;
var tslib_1 = require("tslib");
var is_nil_1 = tslib_1.__importDefault(require("./is-nil"));
/**
 * Converts `value` to `string` / using plain `toString`
 * @param {*} value
 * @returns {String}
 */
function toChar(value) {
    var str = (0, is_nil_1.default)(value) || (isNaN(value) && !value.length) ? "" : value;
    return String(str);
}
exports.toChar = toChar;
exports.default = toChar;
