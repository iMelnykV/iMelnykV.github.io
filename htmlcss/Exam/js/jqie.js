// $(function() {

  var flicks = [];

  $('.carousel1').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

  $('.carousel').each(function(i) {
    console.log($(this));
    console.log($('.carousel_1'));
    flicks[i] = $('.carousel_1').flickity();
  });

  $('.partner__img').each(function(i) {
    srcvalue = $(this).attr('data-x-src');
    $(this).attr('src',srcvalue).removeAttr('data-x-src');
  });
//
// });
