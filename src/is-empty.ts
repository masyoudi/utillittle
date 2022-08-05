/**
 * Checks if `value` is an empty object or collection
 * @param {*} value
 * @returns {Boolean}
 */
export function isEmpty(value: any): boolean {
  return (
    [Object, Array].includes((value || {}).constructor) &&
    !Object.entries(value || {}).length
  );
}

export default isEmpty;
