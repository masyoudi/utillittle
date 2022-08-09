declare type UUIDVersion = 1 | 2 | 3 | 4 | 5 | "1" | "2" | "3" | "4" | "5" | "all";
/**
 * Checks if the string of `value` is valid UUID (version 1, 2, 3, 4, 5).
 * @param {string} value The value to check.
 * @param {string} version The UUID version.
 * @returns {boolean} Returns `true` if  the `value` is valid UUID, else `false`.
 */
export declare function isUUID(value: string, version: UUIDVersion): boolean;
export default isUUID;
