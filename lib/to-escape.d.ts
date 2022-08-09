/**
 * Escape string in `value`
 * @param {string} value The value to escaped.
 * @returns {string} Returns escaped string.
 * @example
 *
 * toEscape("<script>alert(1)</script>");
 * // => "&lt;script&gt;alert(1)&lt;&#x2F;script&gt;"
 */
export declare function toEscape(value: string): string;
export default toEscape;
