var app = require('../js/app.js');

describe("app", function() {

  it("pow(0, 1)", function() {
  	var result;
  	result = app.pow(0, 1);
    expect(result).toBe(0);
  });

  it("pow(1, 0)", function() {
     var result;
     result = app.pow(1, 0);
     expect(result).toBe(1);
  });

  it("pow(5, 5)", function() {
     var result;
     result = app.pow(5, 5);
     expect(result).toBe(3125);
  });
});
