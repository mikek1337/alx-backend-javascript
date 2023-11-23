const { expect } = require("chai");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  
    it("should return the sum of two integers", () => {
      expect(calculateNumber(1, 2, "SUM")).to.equal(3);
      expect(calculateNumber(5, 5, "SUM")).to.equal(10);
      expect(calculateNumber(-5, -5, "SUM")).to.equal(-10);
   
  });

  
    it("should return the difference of two integers", () => {
      expect(calculateNumber(5, 2, "SUBTRACT")).to.equal(3);
      expect(calculateNumber(10, 5, "SUBTRACT")).to.equal(5);
      expect(calculateNumber(-5, -5, "SUBTRACT")).to.equal(0);
    });
  

  
    it("should return the division of two integers", () => {
      expect(calculateNumber(10, 2, "DIVIDE")).to.equal(5);
      expect(calculateNumber(5, 10, "DIVIDE")).to.equal(0.5);
      expect(calculateNumber(-10, -5, "DIVIDE")).to.equal(2);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber(10, 0, "DIVIDE")).to.equal("Error");
      expect(calculateNumber(-5, 0, "DIVIDE")).to.equal("Error");
      expect(calculateNumber(0, 0, "DIVIDE")).to.equal("Error");
  
  });
});
