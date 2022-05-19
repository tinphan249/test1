var menuLeft = document.getElementById("cbp-spmenu-s1");
$(document).on("click", "#nav-icon1", function (ev) {
  var $_this = $(this);
  $("body").toggleClass("overfolow_mb");
  $("html").toggleClass("overfolow_mb");
  $(".cbp-spmenu-left").toggleClass("pb30");
  $_this.toggleClass("open");
  classie.toggle(this, "active");
  classie.toggle(menuLeft, "cbp-spmenu-open");
  ev.stopImmediatePropagation();
});
$(document).on("click", ".fa-menu__mobile", function (ev) {
  var $_this = $(this);
  $_this.toggleClass("fa-angle-up");
  $_this.closest("li").find(">.sub-menu__mobi").slideToggle();
});
$(document).on("click", ".btn-add_data_mb", function (ev) {
  var $_this = $(this);
  $_this.closest(".add_data_mb").find(">.menu-you__can").slideToggle();
});
$(document).on("click", ".btn-login_mb", function (ev) {
  var $_this = $(this);
  $_this.closest(".login-header_mb").find(">ul").slideToggle();
});
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();
$(window).scroll(function (event) {
  didScroll = true;
});
setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && st > navbarHeight) {
    $(".menu_mobile_res").removeClass("nav-down").addClass("nav-up");
  } else {
    if (st + $(window).height() < $(document).height()) {
      $(".menu_mobile_res").removeClass("nav-up").addClass("nav-down");
    }
  }
  lastScrollTop = st;
}
$(function () {
  var $win = $(window);
  var $box = $(".cbp-spmenu-left");
  $win.on("click.Bst", function (event) {
    if ($box.has(event.target).length == 0 && !$box.is(event.target)) {
      if ($("#cbp-spmenu-s1").hasClass("cbp-spmenu-open")) {
        $("#nav-icon1").trigger("click");
      }
    }
  });
});

// aler huy code

setTimeout(function () {
  $(".alert-login_mess").fadeOut(500);
}, 5000);
$(document).ready(function () {
  $("ul.header-menu_main >li").hover(
    function () {
      $(this).find(".submenu").stop(true, true).delay(200).fadeIn(200);
    },
    function () {
      $(this).find(".submenu").stop(true, true).delay(200).fadeOut(200);
    }
  );
  $("ul.menu-top_right >li").hover(
    function () {
      $(this).find(".menuh-h__login").stop(true, true).delay(200).fadeIn(200);
    },
    function () {
      $(this).find(".menuh-h__login").stop(true, true).delay(200).fadeOut(200);
    }
  );
  $("ul.menu-top_right >li").hover(
    function () {
      $(this)
        .find(".menu-profile_user")
        .stop(true, true)
        .delay(200)
        .fadeIn(200);
    },
    function () {
      $(this)
        .find(".menu-profile_user")
        .stop(true, true)
        .delay(200)
        .fadeOut(200);
    }
  );
  $("ul.menu-top_right >li.box_ic").hover(
    function () {
      $(this).find(".menu-you__can").stop(true, true).delay(200).fadeIn(200);
    },
    function () {
      $(this).find(".menu-you__can").stop(true, true).delay(200).fadeOut(200);
    }
  );
});
