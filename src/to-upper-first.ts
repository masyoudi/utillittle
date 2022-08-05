import toChar from "./to-char";

/**
 * Converts the first character of `value` to upper case.
 * @param {String} value
 * @returns {String}
 */
export function toUpperFirst(value: string): string {
  let str = toChar(value);
  return str.charAt(0).toUpperCase().concat(str.slice(1));
}

export default toUpperFirst;
