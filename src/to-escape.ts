import toChar from "./to-char";

/**
 * Escape string in `value`
 * @param {string} value The value to escaped.
 * @returns {string} Returns escaped string.
 * @example
 *
 * toEscape("<script>alert(1)</script>");
 * // => "&lt;script&gt;alert(1)&lt;&#x2F;script&gt;"
 */
export function toEscape(value: string): string {
  const map = {
    "&": "&amp;",
    '"': "&quot;",
    "'": "&#x27;",
    "<": "&lt;",
    ">": "&gt;",
    "/": "&#x2F;",
    "\\": "&#x5C;",
    "`": "&#96;",
  };
  return toChar(value).replace(/[&"'<>\/\\`]/g, (m: string) => map[m]);
}

export default toEscape;
