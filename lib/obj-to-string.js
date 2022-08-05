/**
 * Converts object to string
 * @param {Object} value
 * @returns {String}
 */
export function objToString(value) {
    return Object.prototype.toString.call(value);
}
export default objToString;
