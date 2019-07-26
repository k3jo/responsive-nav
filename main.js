$(document).ready(function () {

  // Main Nav Toggle
  $('.main-nav--trigger').on('click', function (e) {
    e.preventDefault();

    if ($('.l2-nav').hasClass('hidden')) {
      $('.l2-nav').removeClass('hidden').attr('aria-expanded', "true");

    } else {
      $('.l2-nav').addClass('hidden').attr('aria-expanded', "false");

    }
  })

  // Responsive Nav Toggle
  $('.navbar-toggler').on('click', function(e) {
    e.preventDefault();
    $('.main-nav').removeClass('.mobile-hidden').attr('aria-expanded', "true");;
  })


  // User Nav Toggle
  $('.btn-user').on('click', function (e) {
    e.preventDefault();

    if ($('.btn-user-nav').hasClass('hidden')) {
      $('.btn-user-nav').removeClass('hidden').attr('aria-expanded', "true");

    } else {
      $('.btn-user-nav').addClass('hidden').attr('aria-expanded', "false");

    }

  })

  $('.btn-user-nav--trigger').on('click', function (e) {
    e.preventDefault();
    $('.btn-user-nav').addClass('hidden').attr('aria-expanded', "false");

  })

});