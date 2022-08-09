"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIn = void 0;
var tslib_1 = require("tslib");
var is_function_1 = tslib_1.__importDefault(require("./is-function"));
var is_object_tag_1 = tslib_1.__importDefault(require("./is-object-tag"));
var is_plain_object_1 = tslib_1.__importDefault(require("./is-plain-object"));
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
/**
 * Checks if `value` is in `options` (`options` can be `Object` or `Array`)
 * @param {String} value
 * @param {*} options
 * @returns {Boolean}
 */
function isIn(value, options) {
    var str = (0, to_char_1.default)(value);
    var result = false;
    if ((0, is_object_tag_1.default)(options, "Array")) {
        var arr = [];
        for (var i in options) {
            if ({}.hasOwnProperty.call(options, i)) {
                arr[i] = (0, to_char_1.default)(options[i]);
            }
        }
        result = arr.indexOf(str) >= 0;
    }
    else if ((0, is_plain_object_1.default)(options)) {
        result = options.hasOwnProperty(str);
    }
    else if (options && (0, is_function_1.default)(options.indexOf)) {
        result = options.indexOf(str) >= 0;
    }
    return result;
}
exports.isIn = isIn;
exports.default = isIn;
