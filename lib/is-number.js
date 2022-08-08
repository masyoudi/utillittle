"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
var tslib_1 = require("tslib");
var is_type_1 = tslib_1.__importDefault(require("./is-type"));
/**
 * Checks if `value` is `number`
 * @param {*} value any
 * @returns {Boolean}
 */
function isNumber(value) {
    return (0, is_type_1.default)(value, "number");
}
exports.isNumber = isNumber;
exports.default = isNumber;
