import toChar from "./to-char";
/**
 * Unescape string in `value`
 * @param {String} value
 * @returns {String}
 */
export function toUnescape(value) {
    var map = {
        "&quot;": '"',
        "&#x27;": "'",
        "&lt;": "<",
        "&gt;": ">",
        "&#x2F;": "/",
        "&#x5C;": "\\",
        "&#96;": "`",
        "&amp;": "&",
    };
    var str = toChar(value);
    for (var key in map) {
        str = str.replace(new RegExp(key, "g"), map[key]);
    }
    return str;
}
export default toUnescape;
