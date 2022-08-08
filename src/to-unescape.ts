import toChar from "./to-char";

/**
 * Unescape string in `value`
 * @param {String} value
 * @returns {String}
 */
export function toUnescape(value: string): string {
  const map = {
    "&quot;": '"',
    "&#x27;": "'",
    "&lt;": "<",
    "&gt;": ">",
    "&#x2F;": "/",
    "&#x5C;": "\\",
    "&#96;": "`",
    "&amp;": "&",
  };
  let str = toChar(value);
  for (let key in map) {
    str = str.replace(new RegExp(key, "g"), map[key]);
  }

  return str;
}

export default toUnescape;
