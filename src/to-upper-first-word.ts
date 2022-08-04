import toChar from "./to-char";

/**
 * Converts every first character of word in `value` to upper case.
 * @param {String} value
 * @returns {String}
 */
export default function toUpperFirstWord(value: string): string {
  return toChar(value).replace(/\w\S*/g, (txt: string) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}
