"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUUID = void 0;
var tslib_1 = require("tslib");
// https://github.com/validatorjs/validator.js/blob/master/src/lib/isUUID.js
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
var uuid = {
    1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
};
/**
 * Checks if the string of `value` is valid UUID (version 1, 2, 3, 4, 5).
 * @param {string} value The value to check.
 * @param {string} version The UUID version.
 * @returns {boolean} Returns `true` if  the `value` is valid UUID, else `false`.
 */
function isUUID(value, version) {
    var hasVersion = Object.keys(uuid).indexOf((0, to_char_1.default)(version)) !== -1;
    var regExp = uuid[hasVersion ? version : "all"];
    return !!regExp && regExp.test((0, to_char_1.default)(value));
}
exports.isUUID = isUUID;
exports.default = isUUID;
