"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectTag = void 0;
var tslib_1 = require("tslib");
var is_object_1 = tslib_1.__importDefault(require("./is-object"));
var obj_to_string_1 = tslib_1.__importDefault(require("./obj-to-string"));
var is_string_1 = tslib_1.__importDefault(require("./is-string"));
/**
 * Get object name
 * @param {Object} value
 * @param {String} tag
 * @returns {Boolean}
 */
function isObjectTag(value, tag) {
    var valid = (0, is_object_1.default)(value) && (0, is_string_1.default)(tag);
    return valid ? (0, obj_to_string_1.default)(value) === "[object " + tag + "]" : false;
}
exports.isObjectTag = isObjectTag;
exports.default = isObjectTag;
