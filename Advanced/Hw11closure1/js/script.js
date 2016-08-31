var Counter = function() {
  var privateCounter = 1;

  return function() {
    return privateCounter++;
  }
};

var Counter1 = Counter();

alert(Counter1());
alert(Counter1());
alert(Counter1());
alert(Counter1());
alert(Counter1());
