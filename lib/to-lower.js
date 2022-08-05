import toChar from "./to-char";
/**
 * Converts `value` to lower case.
 * @param {String} value
 * @returns {String}
 */
export function toLower(value) {
    return toChar(value).toLowerCase();
}
export default toLower;