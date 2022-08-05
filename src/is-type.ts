import typeOf from "./type-of";

/**
 * Checks if `value` is type of `typ`
 * @param {*} value
 * @param {String} typ
 * @returns {Boolean}
 */
export function isType(value: any, typ: string): boolean {
  return typeOf(value) === typ;
}

export default isType;
