$(document).ready(function() {
  $('.dropdown').hover(
    function () {
      $(this).children('.sub-menu').slideDown(500);
    },
    function () {
      $(this).children('.sub-menu').slideUp(500);
    }
  );
});

// Плавное изменение цвета фона при наведении мыши
jQuery(document).ready(function() {
  jQuery(".sub-menu").mouseenter(function() {
    jQuery(this).animate({
      backgroundColor: "red",
    }, 800 );
  });
  jQuery(".sub-menu").mouseleave(function() {
    jQuery(this).animate({
      backgroundColor: "maroon",
    }, 800 );
  });
});
