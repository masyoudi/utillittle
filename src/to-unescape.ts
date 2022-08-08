import toChar from "./to-char";

/**
 * Unescape string in `value`
 * @param {String} value
 * @returns {String}
 */
export function toUnescape(value: string): string {
  const map = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
  };
  return toChar(value).replace(/[&<>"']/g, (m: string) => map[m]);
}

export default toUnescape;
