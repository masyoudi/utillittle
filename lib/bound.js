/**
 * Asserts `value` is between `min` and `max`
 * @param {Number} value
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
export function bound(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
export default bound;
