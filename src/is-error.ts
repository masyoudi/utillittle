import isObject from "./is-object";
import isObjectTag from "./is-object-tag";

/**
 * Checks if `value` is `Error` object
 * @param {*}
 * @returns {Boolean}
 */
export default function isError(value: any): boolean {
  return (
    isObject(value) && (isObjectTag(value, "Error") || value instanceof Error)
  );
}
