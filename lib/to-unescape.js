import toChar from "./to-char";
/**
 * Unescape string in `value`
 * @param {String} value
 * @returns {String}
 */
export function toUnescape(value) {
    var map = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
    };
    return toChar(value).replace(/[&<>"']/g, function (m) { return map[m]; });
}
export default toUnescape;
