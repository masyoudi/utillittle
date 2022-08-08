"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNil = void 0;
var tslib_1 = require("tslib");
var is_null_1 = tslib_1.__importDefault(require("./is-null"));
var is_undefined_1 = tslib_1.__importDefault(require("./is-undefined"));
/**
 * Checks if `value` is `null` or `undefined`
 * @param {*} value
 * @returns {Boolean}
 */
function isNil(value) {
    return (0, is_null_1.default)(value) || (0, is_undefined_1.default)(value);
}
exports.isNil = isNil;
exports.default = isNil;
