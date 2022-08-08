"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isType = void 0;
var tslib_1 = require("tslib");
var type_of_1 = tslib_1.__importDefault(require("./type-of"));
/**
 * Checks if `value` is type of `typ`
 * @param {*} value
 * @param {String} typ
 * @returns {Boolean}
 */
function isType(value, typ) {
    return (0, type_of_1.default)(value) === typ;
}
exports.isType = isType;
exports.default = isType;
