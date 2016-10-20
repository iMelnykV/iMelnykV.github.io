
let factory = (function() {
  let animals = ['dog', 'cat'];

  let publicMethod = {
    init(type) {
      let idx = animals.indexOf(type);
      if (idx != -1) {
        return Object.create(animalProto[idx]);
      }
    }
  }

  let animalProto = animals.map(createProto);

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

let newDog = factory.init('dog');
alert(newDog.say());
console.log(newDog.init);

let newCat = factory.init('cat');
alert(newCat.say());
console.log(newCat.init);
