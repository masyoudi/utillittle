"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSymbol = void 0;
var tslib_1 = require("tslib");
var is_null_1 = tslib_1.__importDefault(require("./is-null"));
var is_object_tag_1 = tslib_1.__importDefault(require("./is-object-tag"));
var is_type_1 = tslib_1.__importDefault(require("./is-type"));
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol("123")
 * // => false
 */
function isSymbol(value) {
    return ((0, is_type_1.default)(value, "symbol") ||
        ((0, is_type_1.default)(value, "object") && !(0, is_null_1.default)(value) && (0, is_object_tag_1.default)(value, "Symbol")));
}
exports.isSymbol = isSymbol;
exports.default = isSymbol;
