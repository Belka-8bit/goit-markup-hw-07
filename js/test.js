$(function () {
  let header = $(".page-header");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("page-header--change");
    } else {
      header.removeClass("page-header--change");
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
  let header = $(".header-logo");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("header-logo--change");
    } else {
      header.removeClass("header-logo--change");
    }
  });
});

$(function () {
  let header = $(".header__address");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("header__address__change");
    } else {
      header.removeClass("header__address__change");
    }
  });
});
