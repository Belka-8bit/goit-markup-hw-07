$(function () {
  let header = $(".header");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("header--change");
    } else {
      header.removeClass("header--change");
    }
  });
});

$(function () {
  let header = $(".nav-list__link");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("nav-list__link--change");
    } else {
      header.removeClass("nav-list__link--change");
    }
  });
});

$(function () {
  let header = $(".nav-list__link--current");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("nav-list__link--current--change");
    } else {
      header.removeClass("nav-list__link--current--change");
    }
  });
});

$(function () {
  let header = $(".logo--header");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("logo--header--change");
    } else {
      header.removeClass("logo--header--change");
    }
  });
});

$(function () {
  let header = $(".contact-list__link");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("contact-list__link--change");
    } else {
      header.removeClass("contact-list__link--change");
    }
  });
});
