import { describe, it } from "https://deno.land/x/deno_mocha@0.3.0/mod.ts"; // Потому что для deno просто mocha из npm не работает
// @deno-types="npm:@types/chai@^4.3.4"
import chai from "npm:chai@^4.3.7";

const assert = chai.assert;
function pow(x: number, n: number): number {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

describe("Возводит x в степень n", function () {
  it("5 в степени 1 будет 5", function () {
    assert.equal(pow(5, 1), 5);
  });

  it("5 в степени 2 будет 25", function () {
    assert.equal(pow(5, 2), 25);
  });

  it("5 в степени 3 будет 125", function () {
    assert.equal(pow(5, 3), 125);
  });
});
