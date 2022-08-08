"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bound = void 0;
/**
 * Asserts `value` is between `min` and `max`
 * @param {Number} value
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
function bound(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
exports.bound = bound;
exports.default = bound;
