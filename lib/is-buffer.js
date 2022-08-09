"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBuffer = void 0;
var tslib_1 = require("tslib");
var is_function_1 = tslib_1.__importDefault(require("./is-function"));
var is_null_1 = tslib_1.__importDefault(require("./is-null"));
/**
 * Checks if `value` is a buffer.
 * @param {*} value The value to check.
 * @returns {boolean} Returns boolean `true` if `value` is a buffer, else false.
 * @example
 *
 * isBuffer(10);
 * // => true
 */
function isBuffer(value) {
    return (!(0, is_null_1.default)(value) &&
        !(0, is_null_1.default)(value.constructor) &&
        (0, is_function_1.default)(value.constructor.isBuffer) &&
        value.constructor.isBuffer(value));
}
exports.isBuffer = isBuffer;
exports.default = isBuffer;
