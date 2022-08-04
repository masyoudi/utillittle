import isType from "./is-type";

/**
 * Checks if `value` is `symbol`
 * @param {*} value
 * @returns {Boolean}
 */
export default function isSymbol(value: any): boolean {
  return isType(value, "symbol");
}
