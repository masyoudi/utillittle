import toChar from "./to-char";
/**
 * Escape string in `value`
 * @param {String} value
 * @returns {String}
 */
export function toEscape(value) {
    var map = {
        "&": "&amp;",
        '"': "&quot;",
        "'": "&#x27;",
        "<": "&lt;",
        ">": "&gt;",
        "/": "&#x2F;",
        "\\": "&#x5C;",
        "`": "&#96;",
    };
    return toChar(value).replace(/[&"'<>\/\\`]/g, function (m) { return map[m]; });
}
export default toEscape;
