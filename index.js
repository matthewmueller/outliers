/**
 * Export `outliers`
 */

module.exports = outliers;

/**
 * Initialize `outliers`
 *
 * @param {Array} arr
 * @return {Array} outliers
 */

function outliers(arr) {
  arr = arr.slice(0).sort(function(a, b) {
      return a - b;
  });

  var len = arr.length;
  var middle = median(arr);
  var range = iqr(arr);
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

function iqr(arr) {
  var len = arr.length;
  var q1 = median(arr.slice(0, ~~(len / 2)));
  var q3 = median(arr.slice(Math.ceil(len / 2)));
  var g = 1.5;

  return (q3 - q1) * g;
}
