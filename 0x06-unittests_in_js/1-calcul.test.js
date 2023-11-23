const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  it("should return the sum of two integers", () => {
    assert.strictEqual(calculateNumber(1, 2, "SUM"), 3);
    assert.strictEqual(calculateNumber(5, 5, "SUM"), 10);
    assert.strictEqual(calculateNumber(-5, -5, "SUM"), -10);
  });

  it("should return the difference of two integers", () => {
    assert.strictEqual(calculateNumber(5, 2, "SUBTRACT"), 3);
    assert.strictEqual(calculateNumber(10, 5, "SUBTRACT"), 5);
    assert.strictEqual(calculateNumber(-5, -5, "SUBTRACT"), 0);
  });

  it("should return the division of two integers", () => {
    assert.strictEqual(calculateNumber(10, 2, "DIVIDE"), 5);
    assert.strictEqual(calculateNumber(5, 10, "DIVIDE"), 0.5);
    assert.strictEqual(calculateNumber(-10, -5, "DIVIDE"), 2);
  });

  it('should return "Error" when dividing by 0', () => {
    assert.strictEqual(calculateNumber(10, 0, "DIVIDE"), "Error");
    assert.strictEqual(calculateNumber(-5, 0, "DIVIDE"), "Error");
    assert.strictEqual(calculateNumber(0, 0, "DIVIDE"), "Error");
  });
});
