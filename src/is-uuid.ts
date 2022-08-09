// https://github.com/validatorjs/validator.js/blob/master/src/lib/isUUID.js
import toChar from "./to-char";

type UUIDVersion = 1 | 2 | 3 | 4 | 5 | "1" | "2" | "3" | "4" | "5" | "all";
const uuid = {
  1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
};

/**
 * Checks if the string of `value` is valid UUID (version 1, 2, 3, 4, 5).
 * @param {string} value The value to check.
 * @param {string} version The UUID version.
 * @returns {boolean} Returns `true` if  the `value` is valid UUID, else `false`.
 */
export function isUUID(value: string, version: UUIDVersion): boolean {
  const hasVersion = Object.keys(uuid).indexOf(toChar(version)) !== -1;
  const regExp = uuid[hasVersion ? version : "all"];
  return !!regExp && regExp.test(toChar(value));
}

export default isUUID;
