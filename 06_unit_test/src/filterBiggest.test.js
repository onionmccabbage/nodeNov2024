import { expect, test, describe } from "vitest";
import filterBiggestNumbers from "./filterBiggest";

describe("Will throw if the first parameter is not an array", () => {
  test("should throw an error if the first parameter is not an array", () => {
    expect(() => filterBiggestNumbers("not an array", 5)).to.throw(
      "The first argument must be an array"
    );
  });
});