function pow(base, exponent) {
  if (+base === 0) return 0;
  if (+exponent === 0) return 1;

  var result = base;

  for (var i = Math.abs(exponent); i > 1; i--) {
    result *= Math.abs(base);
  }
  return exponent > 0 ? result : 1/result;
}

var app = {
  pow: pow
};

try {
  module.exports = app;
}
catch (e) {}
