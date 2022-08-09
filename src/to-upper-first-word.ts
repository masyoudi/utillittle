import toChar from "./to-char";

/**
 * Converts every first character of the word in `value` to uppercase.
 * @param {string} value The value to convert.
 * @returns {string} Returns string value converted to uppercase in every first character of the word.
 * @example
 *
 * toUpperFirstWord("the foo bar");
 * // => "The Foo Bar"
 *
 * toUpperFirstWord("tHe fOO bAr");
 * // => "The Foo Bar"
 */
export function toUpperFirstWord(value: string): string {
  return toChar(value).replace(/\w\S*/g, (txt: string) => {
    return txt.charAt(0).toUpperCase().concat(txt.substring(1).toLowerCase());
  });
}

export default toUpperFirstWord;
