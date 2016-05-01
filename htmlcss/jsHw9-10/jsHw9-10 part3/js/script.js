$(document).ready(function() {
  $('.dropdown').hover(
    function () {
      $(this).children('.sub-menu').slideDown(500);
    },
    function () {
      $(this).children('.sub-menu').slideUp(500);
    }
  );
// Плавное изменение цвета фона при наведении мыши
  var $links = $('.sub-menu');

  $links.mouseenter(function() {
    $(this).animate({
      backgroundColor: 'red'
    }, 800 );
  });
  $links.mouseleave(function() {
    $(this).animate({
      backgroundColor: 'maroon'
    }, 800 );
  });
});
