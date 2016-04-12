$(function () {
  var $firstPage = $('.first_page_name');
  var $first = $('.first');
  var $secondPage = $('.second_page_name');
  var $second = $('.second');
  var $thirdPage = $('.third_page_name');
  var $third = $('.third');

  $firstPage.on('click', function () {
    $firstPage.attr('id', 'active');
    $first.attr('id', 'active');
    $secondPage.removeAttr('id', 'active');
    $second.removeAttr('id', 'active');
    $thirdPage.removeAttr('id', 'active');
    $third.removeAttr('id', 'active');
  });

  $secondPage.on('click', function () {
    $firstPage.removeAttr('id', 'active');
    $first.removeAttr('id', 'active');
    $secondPage.attr('id', 'active');
    $second.attr('id', 'active');
    $thirdPage.removeAttr('id', 'active');
    $third.removeAttr('id', 'active');
  });

  $thirdPage.on('click', function () {
    $firstPage.removeAttr('id', 'active');
    $first.removeAttr('id', 'active');
    $secondPage.removeAttr('id', 'active');
    $second.removeAttr('id', 'active');
    $thirdPage.attr('id', 'active');
    $third.attr('id', 'active');
  });
});

$(function() {
  $( "#tabs" ).tabs();
});

$(function() {
    var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5"
      }
    });
    $( "<button>" )
      .text( "Show help" )
      .button()
      .click(function() {
        tooltips.tooltip( "open" );
      })
      .insertAfter( "form" );
  });
