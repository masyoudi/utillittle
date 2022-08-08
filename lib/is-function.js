"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = void 0;
var tslib_1 = require("tslib");
var is_type_1 = tslib_1.__importDefault(require("./is-type"));
/**
 * Checks if `value` is a `function`
 * @param {*} value
 * @returns {Boolean}
 */
function isFunction(value) {
    return (0, is_type_1.default)(value, "function");
}
exports.isFunction = isFunction;
exports.default = isFunction;
