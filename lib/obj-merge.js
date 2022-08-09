"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objMerge = void 0;
var tslib_1 = require("tslib");
var is_undefined_1 = tslib_1.__importDefault(require("./is-undefined"));
/**
 * Merge object `value` with `defaults`
 * @param {Object} value
 * @param {Object} defaults
 * @returns {Object}
 */
function objMerge(value, defaults) {
    if (value === void 0) { value = {}; }
    for (var key in defaults) {
        if (!(0, is_undefined_1.default)(value[key])) {
            value[key] = defaults[key];
        }
    }
    return value;
}
exports.objMerge = objMerge;
exports.default = objMerge;
