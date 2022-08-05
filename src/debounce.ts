/**
 * Creates a debounced function
 * @param {Function} func
 * @param {Number} wait
 */
export function debounce<Arg extends any[]>(
  func: (...args: Arg) => any,
  wait: number
): (...args: Arg) => void {
  let timer: NodeJS.Timeout;
  return (...args: Arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), wait);
  };
}

export default debounce;
