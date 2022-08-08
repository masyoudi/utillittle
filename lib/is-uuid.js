"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUUID = void 0;
var tslib_1 = require("tslib");
// https://github.com/validatorjs/validator.js/blob/master/src/lib/isUUID.js
var is_nil_1 = tslib_1.__importDefault(require("./is-nil"));
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
 * Check UUID
 * @param {String} value
 * @param {String} version
 * @returns {Boolean}
 */
function isUUID(value, version) {
    var regExp = uuid[!(0, is_nil_1.default)(version) ? version : "all"];
    return !!regExp && regExp.test((0, to_char_1.default)(value));
}
exports.isUUID = isUUID;
exports.default = isUUID;
