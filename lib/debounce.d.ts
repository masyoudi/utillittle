declare type Options<Data> = {
    immediate?: boolean;
    waiting?: number;
    callback?: (data: Data) => void;
};
interface DebounceFun<Args extends any[], Fun extends (...args: Args) => any> {
    (this: ThisParameterType<Fun>, ...args: Args & Parameters<Fun>): Promise<ReturnType<Fun>>;
    cancel: (reason: any) => void;
}
/**
 * Debounce function
 * @param {function} fun Function
 * @param {number} wait Timeout
 * @param {*} options The options `{ immediate, waiting, callback }`
 * @returns {function}
 * @example
 *
 * const asyncFun = async () => "foo";
 * const debounced = debounce(asyncFun);
 * const resultFoo = await debounce();
 * resultFoo === "foo";
 * // => true
 *
 */
export declare function debounce<Args extends any[], Fun extends (...args: Args) => any>(fun: Fun, wait?: number, options?: Options<ReturnType<Fun>>): DebounceFun<Args, Fun>;
export default debounce;
