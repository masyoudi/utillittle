"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objToString = void 0;
/**
 * Converts object to string
 * @param {Object} value
 * @returns {String}
 */
function objToString(value) {
    return Object.prototype.toString.call(value);
}
exports.objToString = objToString;
exports.default = objToString;
