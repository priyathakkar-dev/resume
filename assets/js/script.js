var scrollOffset = -30;

(function ($) {
  "use strict";

  $(window).bind("load", function () {
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(1000).css({ 'overflow-x': 'hidden' }).css({ 'overflow-y': 'auto' });
  });

  $(window).ready(function () {

    $('[data-placeholder]').focus(function () {
      var input = $(this);
      if (input.val() == input.attr('data-placeholder')) {
        input.val('');
      }
    }).blur(function () {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('data-placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('data-placeholder'));
      }
    }).blur();

    $('[data-placeholder]').parents('form').submit(function () {
      $(this).find('[data-placeholder]').each(function () {
        var input = $(this);
        if (input.val() == input.attr('data-placeholder')) {
          input.val('');
        }
      });
    });

  });

  //hashtag navigation address setup (deeplink)
  $('.nav-menu a').address($(this).attr('href'));
})(jQuery);



// Sticky Nav
$(window).scroll(function (e) {
  var nav_anchor = $(".top-menu-holder");
  var gotop = $(document);
  if ($(this).scrollTop() >= 500) {
    $('.goto-top').css({ 'opacity': 1 });
  } else if ($(this).scrollTop() < 500) {
    $('.goto-top').css({ 'opacity': 0 });
  }
  if ($(this).scrollTop() >= $('header').height()) {
    nav_anchor.addClass('split');
  }
  else if ($(this).scrollTop() < $('header').height()) {
    nav_anchor.removeClass('split');
  }
});


if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (function () {
    return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (/* function FrameRequestCallback / callback, / DOMElement Element */ element) { };
  })();

}