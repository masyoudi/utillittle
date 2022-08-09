"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isType = void 0;
var tslib_1 = require("tslib");
var type_of_1 = tslib_1.__importDefault(require("./type-of"));
/**
 * Checks if `value` is one of `"undefined" | "object" | "boolean" | "number" | "bigint" | "string" | "symbol" | "function"`.
 * @param {*} value The value to check.
 * @param {string} typ One of `ListType`
 * @returns {boolean} Returns `true` if `value` is one of `"undefined" | "object" | "boolean" | "number" | "bigint" | "string" | "symbol" | "function"`, else `false`.
 * @example
 *
 * isType(undefined, "undefined");
 * // => true
 *
 * isType("undefined", "undefined");
 * // => false
 *
 * isType("undefined", "string");
 * // => true
 *
 * isType(1, "number");
 * // => true
 */
function isType(value, typ) {
    return (0, type_of_1.default)(value) === typ;
}
exports.isType = isType;
exports.default = isType;
