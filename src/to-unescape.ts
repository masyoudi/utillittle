import toChar from "./to-char";

/**
 * Unescape string in `value`
 * @param {string} value The value to unescaped.
 * @returns {string} Returns unescaped string.
 * @example
 *
 * toUnescape("&lt;script&gt;alert(1)&lt;&#x2F;script&gt;")
 * // => "<script>alert(1)</script>"
 */
export function toUnescape(value: string): string {
  const map: object = {
    "&quot;": '"',
    "&#x27;": "'",
    "&lt;": "<",
    "&gt;": ">",
    "&#x2F;": "/",
    "&#x5C;": "\\",
    "&#96;": "`",
    "&amp;": "&",
  };
  let str: string = toChar(value);
  for (let key in map) {
    str = str.replace(new RegExp(key, "g"), map[key]);
  }

  return str;
}

export default toUnescape;
