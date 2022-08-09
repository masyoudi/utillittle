/**
 * Unescape string in `value`
 * @param {string} value The value to unescaped.
 * @returns {string} Returns unescaped string.
 * @example
 *
 * toUnescape("&lt;script&gt;alert(1)&lt;&#x2F;script&gt;")
 * // => "<script>alert(1)</script>"
 */
export declare function toUnescape(value: string): string;
export default toUnescape;
