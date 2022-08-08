"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
/**
 * Creates a debounced function
 * @param {Function} func
 * @param {Number} wait
 */
function debounce(func, wait) {
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function () { return func.apply(void 0, args); }, wait);
    };
}
exports.debounce = debounce;
exports.default = debounce;
