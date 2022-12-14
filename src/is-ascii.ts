import toChar from "./to-char";

// https://stackoverflow.com/questions/14313183/javascript-regex-how-do-i-check-if-the-string-is-ascii-only

type Booleans = true | false;
/**
 * Checks if `value` is ASCII
 * @param {string} value The value to check.
 * @param {boolean} extended
 * @returns {boolean}
 */
export function isASCII(value: string, extended: Booleans): boolean {
  return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(toChar(value));
}

export default isASCII;
