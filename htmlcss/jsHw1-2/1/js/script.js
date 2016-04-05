var userNum = +prompt('Введите число');
var exponent = +prompt('Введите степень');
pow(userNum, exponent);

function pow(x, n) {

  if (x === "" && n === "") {
    return NaN;
  }

  if (Math.round(x) != x) {
    return NaN;
  }

  if (Math.round(n) != n) {
    return NaN;
  }

  var result = 1;

  for (var i = 0; i < Math.abs(n); i++) {
    result *= x;
  }

  if (n < 0) {
    result = 1 / result;
  }

  console.log('Результат: ' + result);
  alert('Результат: ' + result);
  return result;
}
