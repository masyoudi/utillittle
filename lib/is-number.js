"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
var tslib_1 = require("tslib");
var is_object_1 = tslib_1.__importDefault(require("./is-object"));
var is_object_tag_1 = tslib_1.__importDefault(require("./is-object-tag"));
var is_type_1 = tslib_1.__importDefault(require("./is-type"));
/**
 * Checks if `value` is a `Number` primitive or object.
 * @param {*} value The value to check.
 * @returns {Boolean}
 */
function isNumber(value) {
    return ((0, is_type_1.default)(value, "number") || ((0, is_object_1.default)(value) && (0, is_object_tag_1.default)(value, "Number")));
}
exports.isNumber = isNumber;
exports.default = isNumber;
