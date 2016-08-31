Function.prototype.bind = function(context) {
  var fun = this;
  return function() {
    return fun.apply(context, arguments);
  };
}

var HelloPage = {
   name: 'GoIT',
   init: function() {
      console.log('Hello, ' + this.name);
   }
}

window.onload = HelloPage.init.bind(HelloPage);
