import toChar from "./to-char";
/**
 * Converts every first character of word in `value` to upper case.
 * @param {String} value
 * @returns {String}
 */
export function toUpperFirstWord(value) {
    return toChar(value).replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
}
export default toUpperFirstWord;
