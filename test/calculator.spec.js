import calculator from "../calculator";
import {expect, to} from "chai"

describe("Calculator", () => {
  it("adds properly", () => {
    expect(calculator(1, 1)).to.equal(2);
  })

  it("This should fail", () => {
    expect(calculator(null, 1)).to.equal(null);
  })
})
