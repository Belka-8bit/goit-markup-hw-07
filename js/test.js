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
  let header = $(".nav__link");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("nav__change");
    } else {
      header.removeClass("nav__change");
    }
  });
});

$(function () {
  let header = $(".current");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("current__change");
    } else {
      header.removeClass("current__change");
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
