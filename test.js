var outliers = require('./index.js');
var arr = [12, 14, 51, 12, 10, 9, 16, 1];

console.log(outliers(arr));
console.log(arr.filter(outliers()));
