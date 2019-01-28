import calculator from "../calculator";
import {expect, to} from "chai"

describe("Calculator", () => {
  it("adds properly", () => {
    expect(calculator(1, 1)).to.equal(2);
  })

  it("adds more numbers properly", () => {
    expect(calculator(2, 1, 3)).to.equal(6);
  })
})
