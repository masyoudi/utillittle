"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
/**
 * Checks if `value` is an empty object or collection
 * @param {*} value
 * @returns {Boolean}
 */
function isEmpty(value) {
    return ([Object, Array].includes((value || {}).constructor) &&
        !Object.entries(value || {}).length);
}
exports.isEmpty = isEmpty;
exports.default = isEmpty;
