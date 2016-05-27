requirejs.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    }
  }
});

require (
  ['model',
  'view',
  'controller'],

  function (model, view, controller, $){
    $(function () {
      var firstToDoList = ['test 1', 'test 2', 'test 3'];
      var model = new Model(firstToDoList);
      var view = new View(model);
      var controller = new Controller(model, view);
    });
  }
);
