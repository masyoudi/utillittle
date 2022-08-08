"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = void 0;
var tslib_1 = require("tslib");
var is_type_1 = tslib_1.__importDefault(require("./is-type"));
/**
 * Checks if `value` is `Boolean`
 * @param {*} value
 * @returns {Boolean}
 */
function isBoolean(value) {
    return (0, is_type_1.default)(value, "boolean");
}
exports.isBoolean = isBoolean;
exports.default = isBoolean;
