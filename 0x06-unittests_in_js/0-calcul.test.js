const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Should return the sum two positive numbers', () => {
    const result = calculateNumber(5, 3);
    assert.strictEqual(result, 8);
  });
  it('Should return the sum of two negative numbers', () => {
    const result = calculateNumber(-3, -5);
    assert.strictEqual(result, -8);
  });
  it('Should round and return the sum of a negative and positive integer', () => {
    const result = calculateNumber(7, -2);
    assert.strictEqual(result, 5);
  });
  it('Should round up two positive decimals and return their sum', () => {
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
  });
  it('Should round up two negative decimals ', () => {
    assert.strictEqual(calculateNumber(-2.5, -2.5), -4);
  });
  it('should round and sum a positive and a negative number', () => {
    const result = calculateNumber(7.2, -1.5);
    assert.strictEqual(result, 6);
  });
  it('Should return 2 when true are passed to each paramter', () => {
    assert.strictEqual(calculateNumber(true, true), 2);
  })
  it('Should return 0 when false is passed for both params', () => {
    assert.strictEqual(calculateNumber(false, false), 0);
  })
  it('Should return NaN when undefined is passed to both params', () => {
    assert.strictEqual(calculateNumber(undefined, undefined), NaN);
  })
  it('Should round up an integer and a decimal', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  })
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('rounding down b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding down a and b\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down a\'s floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding up a and b\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounding up a\'s floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
