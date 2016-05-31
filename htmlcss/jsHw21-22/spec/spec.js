var app = require('../js/pow.js');

describe("js", function() {
  it("call function pow", function() {
    // prepare
    a = 4;
    b = 3;
    // act

    // assert
    expect(app.pow(a, b)).toBe(Math.pow(a, b));
    expect(app.pow(-a, b)).toBe(Math.pow(-a, b));
    expect(app.pow(a, -b)).toBe(Math.pow(a, -b));
    expect(app.pow(0, 0)).toBe(0);
    expect(app.pow(0, b)).toBe(0);
    expect(app.pow(a, 0)).toBe(1);
  });
});
