/**
 * Creates a debounced function
 * @param {Function} func
 * @param {Number} wait
 */
export declare function debounce<Arg extends any[]>(func: (...args: Arg) => any, wait: number): (...args: Arg) => void;
export default debounce;
