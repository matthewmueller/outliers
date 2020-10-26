/**
 * Module Dependencies
 */

var isArray = Array.isArray;

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

function outliers(arr, g = 1.5) {
  if (isArray(arr)) return calc(arr, undefined, g);

  var o = null;
  var k = 'string' == typeof arr && arr;

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

function calc(arr, key, g = 1.5) {
  arr = arr.slice(0);

  if (key) arr = arr.map(function(v) { return v[key]; });

  arr = arr.sort(function(a, b) {
    return a - b;
  });

  var len = arr.length;
  var middle = median(arr);
  var range = iqr(arr, g);
  var outliers = [];

  for (var i = 0; i < len; i++) {
    Math.abs(arr[i] - middle) > range && outliers.push(arr[i]);
  }

  return outliers;
}

/**
 * Find the median
 *
 * @param {Array} arr
 * @return {Number}
 */

function median(arr) {
  var len = arr.length;
  var half = ~~(len / 2);

  return len % 2
    ? arr[half]
    : (arr[half - 1] + arr[half]) / 2;
}

/**
 * Find the range
 *
 * @param {Array} arr
 * @return {Number}
 */

function iqr(arr, g = 1.5) {
  var len = arr.length;
  var q1 = median(arr.slice(0, ~~(len / 2)));
  var q3 = median(arr.slice(Math.ceil(len / 2)));

  return (q3 - q1) * g;
}
