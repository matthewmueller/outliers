/**
 * Module Dependencies
 */

const isArray = Array.isArray;

/**
 * Export `outliers`
 */

module.exports = outliers;

/**
 * Initialize the outliers
 *
 * @param {Array|String|undefined}
 * @return {Array|Function}
 */

function outliers(arr, g=1.5) {
  if (isArray(arr)) return calc(arr, null,g);

  let o = null;
  const k = 'string' == typeof arr && arr;

  return function(v, i, a) {
    if (!o) o = calc(a, k, g);
    v = k ? v[k] : v;
    return !~o.indexOf(v);
  }
}

/**
 * Calculate the outliers
 *
 * @param {Array} arr
 * @param {String} key (optional)
 * @return {Array} outliers
 */

function calc(arr, key, g=1.5) {
  if (key) arr = arr.map(v => v[key]);
  arr = arr.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0));

  const middle = Number(median(arr));
  const range = Number(iqr(arr, g));

  return arr.filter(n => Math.abs(Number(n) - middle) > range);
}

/**
 * Find the median
 *
 * @param {Array} arr
 * @return {Number}
 */

function median(arr) {
  const half = arr.length >>> 1;

  return arr.length % 2
    ? arr[half]
    : (Number(arr[half - 1]) + Number(arr[half])) / 2;
}

/**
 * Find the range
 *
 * @param {Array} arr
 * @return {Number}
 */

function iqr(arr, g=1.5) {
  const half = arr.length >>> 1; 

  const q1 = median(arr.slice(0, half));
  const q3 = median(arr.slice(half+1));

  return (Number(q3) - Number(q1)) * g;
}
