"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSymbol = void 0;
var tslib_1 = require("tslib");
var is_type_1 = tslib_1.__importDefault(require("./is-type"));
/**
 * Checks if `value` is `symbol`
 * @param {*} value
 * @returns {Boolean}
 */
function isSymbol(value) {
    return (0, is_type_1.default)(value, "symbol");
}
exports.isSymbol = isSymbol;
exports.default = isSymbol;
