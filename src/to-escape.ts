import toChar from "./to-char";

/**
 * Escape string in `value`
 * @param {String} value
 * @returns {String}
 */
export function toEscape(value: string): string {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return toChar(value).replace(/[&<>"']/g, (m: string) => map[m]);
}

export default toEscape;
