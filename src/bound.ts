/**
 * Asserts `value` is between `min` and `max`
 * @param {Number} value
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
export default function bound(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
