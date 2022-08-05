import isType from "./is-type";

/**
 * Checks if `value` is `symbol`
 * @param {*} value
 * @returns {Boolean}
 */
export function isSymbol(value: any): boolean {
  return isType(value, "symbol");
}

export default isSymbol;
