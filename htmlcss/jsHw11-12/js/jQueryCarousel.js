(function($) {

  $.fn.carousel = function(options) {

    var defaults = {
      overlayColor: 'blue'
    };

    var settings = $.extend(defaults, options);

    console.log('defaults', defaults);
    console.log('options', options);

    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
    leftUIEl.css({
      'background-color': settings.overlayColor
    });
    rightUIEl.css({
      'background-color': settings.overlayColor
    });

    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
      if (currentLeftValue != maximumOffset) {
        currentLeftValue += 125;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }
    });

    rightUIEl.click(function() {
      if (currentLeftValue != minimumOffset) {
        currentLeftValue -= 125;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }
    });
  }

})(jQuery);
