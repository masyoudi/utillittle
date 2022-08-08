"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = void 0;
var tslib_1 = require("tslib");
var is_type_1 = tslib_1.__importDefault(require("./is-type"));
/**
 * Checks if `value` is `string`
 * @param {*} value
 * @returns {Boolean}
 */
function isString(value) {
    return (0, is_type_1.default)(value, "string");
}
exports.isString = isString;
exports.default = isString;
