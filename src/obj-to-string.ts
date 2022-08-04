/**
 * Converts object to string
 * @param {Object} value
 * @returns {String}
 */
export default function objToString(value: any): string {
  return Object.prototype.toString.call(value);
}
