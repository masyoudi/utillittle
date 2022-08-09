import isUndefined from "./is-undefined";

type Options<Data> = {
  immediate?: boolean;
  waiting?: number;
  callback?: (data: Data) => void;
};

interface DebounceFun<Args extends any[], Fun extends (...args: Args) => any> {
  (this: ThisParameterType<Fun>, ...args: Args & Parameters<Fun>): Promise<
    ReturnType<Fun>
  >;
  cancel: (reason: any) => void;
}

interface CreatePromise<Fun> {
  resolve: (result: Fun) => void;
  reject: (reason?: any) => void;
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
export function debounce<
  Args extends any[],
  Fun extends (...args: Args) => any
>(
  fun: Fun,
  wait: number = 50,
  options: Options<ReturnType<Fun>> = {}
): DebounceFun<Args, Fun> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let immediate: boolean = options.immediate ?? false;
  let callback: any = options.callback ?? false;
  let waiting: number = options.waiting || 0;
  let lastTime: number = Date.now();

  let promises: CreatePromise<ReturnType<Fun>>[] = [];

  function invokeTimeout() {
    if (!isUndefined(waiting)) {
      const time = Date.now() - lastTime;

      if (time + wait >= waiting) {
        return waiting - time;
      }
    }

    return wait;
  }

  const wrapper = function (
    this: ThisParameterType<Fun>,
    ...args: Parameters<Fun>
  ) {
    const ctx = this;
    return new Promise<ReturnType<Fun>>((resolve, reject) => {
      const invokeFun = function () {
        timeoutId = undefined;
        lastTime = Date.now();

        if (!immediate) {
          const result = fun.apply(ctx, args);
          callback && callback(result);
          promises.forEach(({ resolve }) => resolve(result));
          promises = [];
        }
      };

      const toCallNow = immediate && isUndefined(timeoutId);

      if (!isUndefined(timeoutId)) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(invokeFun, invokeTimeout());

      if (toCallNow) {
        const result = fun.apply(ctx, args);
        callback && callback(result);

        return resolve(result);
      }

      promises.push({ resolve, reject });
    });
  };

  wrapper.cancel = function (reason?: any) {
    if (!isUndefined(timeoutId)) clearTimeout(timeoutId);
    promises.forEach(({ reject }) => reject(reason));
    promises = [];
  };

  return wrapper;
}

export default debounce;
