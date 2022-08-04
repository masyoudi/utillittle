/**
 * Creates a debounced function
 * @param {Function} func
 * @param {Number} wait
 * @param {Boolean} immediate
 */
export default function debounce(
  func: Function,
  wait: number,
  immediate: boolean
) {
  let timeout;

  return function () {
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (immediate && !timeout) func.apply(this, arguments);
  };
}
