/**
 * Merge object `value` with `defaults`.
 * @param {object} value The value to merge.
 * @param {object} defaults The default value.
 * @returns {object} Returns merged object.
 * @example
 *
 * objMerge({ valid: true }, { name: "foo", valid: false });
 * // => { valid: true, name: "foo" }
 */
export declare function objMerge(value: object | undefined, defaults: object): object;
export default objMerge;
