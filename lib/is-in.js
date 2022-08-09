"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIn = void 0;
var tslib_1 = require("tslib");
var is_function_1 = tslib_1.__importDefault(require("./is-function"));
var is_object_tag_1 = tslib_1.__importDefault(require("./is-object-tag"));
var is_plain_object_1 = tslib_1.__importDefault(require("./is-plain-object"));
var to_char_1 = tslib_1.__importDefault(require("./to-char"));
/**
 * Checks if `value` is in `values` (`values` can be `Object` or `Array`)
 * @param {string} value The value to check.
 * @param {*} values The values for comparison.
 * @returns {boolean} Returns boolean `true` if `value` is in `values`, else `false`.
 * @example
 *
 * isIn("foo", ["foo", "bar", "baz"]);
 * // => true
 *
 * isIn("fooo", ["foo", "bar", "baz"]);
 * // => false
 *
 * isIn("bar", { bar: "the bar", baz: "the baz"});
 * // => true
 *
 * isIn("foo", { bar: "the bar", baz: "the baz"});
 * // => false
 */
function isIn(value, values) {
    var str = (0, to_char_1.default)(value);
    var result = false;
    if ((0, is_object_tag_1.default)(values, "Array")) {
        var arr = [];
        for (var i in values) {
            if ({}.hasOwnProperty.call(values, i)) {
                arr[i] = (0, to_char_1.default)(values[i]);
            }
        }
        result = arr.indexOf(str) >= 0;
    }
    else if ((0, is_plain_object_1.default)(values)) {
        result = values.hasOwnProperty(str);
    }
    else if (values && (0, is_function_1.default)(values.indexOf)) {
        result = values.indexOf(str) >= 0;
    }
    return result;
}
exports.isIn = isIn;
exports.default = isIn;
