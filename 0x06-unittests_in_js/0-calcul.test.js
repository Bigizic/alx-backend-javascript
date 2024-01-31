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
});
