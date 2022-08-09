import toChar from "./to-char";

// https://stackoverflow.com/questions/14313183/javascript-regex-how-do-i-check-if-the-string-is-ascii-only

/**
 * Checks if `value` is ASCII
 * @param {String} value
 * @param {Boolean} extended
 * @returns {Boolean}
 */
export function isASCII(value: string, extended: boolean): boolean {
  return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(toChar(value));
}

export default isASCII;
