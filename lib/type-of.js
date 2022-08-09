"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOf = void 0;
/**
 * Get type of `value`.
 * @param {*} value The value to get data type.
 * @returns {string} Returns a string indicating the type of the unevaluated operand.
 * @example
 *
 * typeOf(10);
 * // => "number"
 *
 * typeOf("foo");
 * // => "string"
 *
 * typeOf(true);
 * // => "boolean"
 *
 * typeOf(undeclaredVariable);
 * // => "undefined"
 */
function typeOf(value) {
    return typeof value;
}
exports.typeOf = typeOf;
exports.default = typeOf;
