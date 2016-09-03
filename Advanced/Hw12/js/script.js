
var factory = (function() {
  var animals = ['dog', 'cat'];

  var publicMethod = {
    init(type) {
      var idx = animals.indexOf(type);
      if (idx != -1) {
        return Object.create(animalProto[idx]);
      }
    }
  }

  var animalProto = animals.map(createProto);

  function createProto(type) {
    return Object.create(publicMethod, {
      'say': {
        value: function() {
          return 'I am a ' + type;
        }
      }
    })
  }
  return Object.create(publicMethod);
})();

var newDog = factory.init('dog');
alert(newDog.say());
console.log(newDog.init);

var newCat = factory.init('cat');
alert(newCat.say());
console.log(newCat.init);
