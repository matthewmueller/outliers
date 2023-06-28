const outliers = require('outliers');
const should = require('should');

describe('Test Array', function() {
  const arr = [12, 14, 51, 12, 10, 9, 16, 1];

  it('Return correct outliers array', function() {
    const outliersArr = outliers(arr);
    should(outliersArr).be.eql([1, 51]);
  });

  it('Filter outliers from Array', function() {
    const filtered = arr.filter(outliers());
    should(filtered).be.eql([9, 10, 12, 12, 14, 16]);
  });
});

describe('Test Object', function() {
  const arrObj = [{ n: 12 }, { n: 14 }, { n: 51 }, { n: 12 }, { n: 10 }, { n: 9 }, { n: 16 }, { n: 1 }];
  
  it('Filter outliers from object', function() {
    const filtered = arrObj.filter(outliers('n'));
    should(filtered).be.eql([ { n: 12 }, { n: 14 }, { n: 12 }, { n: 10 }, { n: 9 }, { n: 16 } ]);
  });
});

