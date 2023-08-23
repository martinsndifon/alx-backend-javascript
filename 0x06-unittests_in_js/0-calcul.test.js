const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('adds two rounded numbers correctly', () => {
    assert.strictEqual(calculateNumber(3, 5), 8);
  });

  it('adds two rounded numbers correctly', () => {
    assert.strictEqual(calculateNumber(3.7, 1), 5);
  });

  it('adds two rounded numbers correctly', () => {
    assert.strictEqual(calculateNumber(3.7, 5.2), 9);
  });
});
