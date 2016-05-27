define(
  'view',
  ['jquery', 'model'],
  function View(model) {
    var self = this;

    function init() {
      var wrapper = tmpl($('#wrapper-tamplate').html());
      $('body').append(wrapper);
      self.elements = {
        input: $('.item-value'),
        addBtn: $('.item-add'),
        listContainer: $('.item-list')
      };
      self.renderList(model.data);
    };
    self.renderList = function(data) {
      var list = tmpl($('#list-tamplate').html(), {data: data});
      self.elements.listContainer.html(list);
    };

    init();
  }
);
