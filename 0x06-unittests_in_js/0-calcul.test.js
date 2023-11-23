const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when passed 2 and 2', () => {
    assert.strictEqual(calculateNumber(2, 2), 4);
  });

  it('should return -2 when passed -1 and -1', () => {
    assert.strictEqual(calculateNumber(-1, -1), -2);
  });

  it('should return 3 when passed 1 and 2', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('should return 4 when passed 2.0 and 2', () => {
    assert.strictEqual(calculateNumber(2.0, 2),4);
  });
});