"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
var tslib_1 = require("tslib");
var is_undefined_1 = tslib_1.__importDefault(require("./is-undefined"));
/**
 * Debounce function
 * @param {function} fun Function
 * @param {number} wait Timeout
 * @param {*} options The options `{ immediate, waiting, callback }`
 * @returns {function}
 * @example
 *
 * const asyncFun = async () => "foo";
 * const debounced = debounce(asyncFun);
 * const resultFoo = await debounce();
 * resultFoo === "foo";
 * // => true
 *
 */
function debounce(fun, wait, options) {
    var _a, _b;
    if (wait === void 0) { wait = 50; }
    if (options === void 0) { options = {}; }
    var timeoutId;
    var immediate = (_a = options.immediate) !== null && _a !== void 0 ? _a : false;
    var callback = (_b = options.callback) !== null && _b !== void 0 ? _b : false;
    var waiting = options.waiting || 0;
    var lastTime = Date.now();
    var promises = [];
    function invokeTimeout() {
        if (!(0, is_undefined_1.default)(waiting)) {
            var time = Date.now() - lastTime;
            if (time + wait >= waiting) {
                return waiting - time;
            }
        }
        return wait;
    }
    var wrapper = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var ctx = this;
        return new Promise(function (resolve, reject) {
            var invokeFun = function () {
                timeoutId = undefined;
                lastTime = Date.now();
                if (!immediate) {
                    var result_1 = fun.apply(ctx, args);
                    callback && callback(result_1);
                    promises.forEach(function (_a) {
                        var resolve = _a.resolve;
                        return resolve(result_1);
                    });
                    promises = [];
                }
            };
            var toCallNow = immediate && (0, is_undefined_1.default)(timeoutId);
            if (!(0, is_undefined_1.default)(timeoutId)) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(invokeFun, invokeTimeout());
            if (toCallNow) {
                var result = fun.apply(ctx, args);
                callback && callback(result);
                return resolve(result);
            }
            promises.push({ resolve: resolve, reject: reject });
        });
    };
    wrapper.cancel = function (reason) {
        if (!(0, is_undefined_1.default)(timeoutId))
            clearTimeout(timeoutId);
        promises.forEach(function (_a) {
            var reject = _a.reject;
            return reject(reason);
        });
        promises = [];
    };
    return wrapper;
}
exports.debounce = debounce;
exports.default = debounce;
