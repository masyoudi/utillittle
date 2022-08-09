"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objMerge = void 0;
var tslib_1 = require("tslib");
var is_undefined_1 = tslib_1.__importDefault(require("./is-undefined"));
/**
 * Merge object `value` with `defaults`.
 * @param {object} value The value to merge.
 * @param {object} defaults The default value.
 * @returns {object} Returns merged object.
 * @example
 *
 * objMerge({ valid: true }, { name: "foo", valid: false });
 * // => { valid: true, name: "foo" }
 */
function objMerge(value, defaults) {
    if (value === void 0) { value = {}; }
    for (var key in defaults) {
        if ((0, is_undefined_1.default)(value[key])) {
            value[key] = defaults[key];
        }
    }
    return value;
}
exports.objMerge = objMerge;
exports.default = objMerge;
