$(document).ready(function () {
  $("ul.menu-new_home >li").hover(
    function () {
      $(this).find(".submenu-course").stop(true, true).delay(200).fadeIn(200);
    },
    function () {
      $(this).find(".submenu-course").stop(true, true).delay(200).fadeOut(200);
    }
  );
});
if ($(".owl-slide__hotNew").length > 0) {
  var $owl = $(".owl-slide__hotNew");
  $owl.owlCarousel({
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    dots: false,
    center: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2, nav: false },
      800: { items: 4, nav: false },
      1400: { stagePadding: 100, items: 4, nav: true },
    },
  });
}
if ($(".owl-slide__recipeDay").length > 0) {
  var $owl = $(".owl-slide__recipeDay");
  $owl.owlCarousel({
    items: 4,
    loop: true,
    nav: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    dots: false,
    margin: 30,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1.2 },
      767: { items: 3, nav: false },
      1024: { items: 4, nav: true },
    },
  });
}
if ($(".owl-slide__newFood").length > 0) {
  var $owl = $(".owl-slide__newFood");
  $owl.owlCarousel({
    items: 4,
    loop: true,
    nav: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    dots: false,
    margin: 30,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1.2 },
      768: { items: 3, nav: false },
      1024: { items: 4, nav: true },
    },
  });
}
if ($(".owl-slide__newEvent").length > 0) {
  var $owl = $(".owl-slide__newEvent");
  $owl.owlCarousel({
    items: 4,
    loop: true,
    nav: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    dots: false,
    margin: 30,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      0: { items: 1.2 },
      768: { items: 3, nav: false },
      1024: { items: 4, nav: true },
    },
  });
}
if ($(".owl-slide__restaurant").length > 0) {
  var $owl = $(".owl-slide__restaurant");
  $owl.owlCarousel({
    items: 3,
    loop: false,
    margin: 30,
    autoplay: true,
    mouseDrag: true,
    nav: false,
    dots: false,
    lazyLoad: true,
    responsive: {
      0: { items: 1.2, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3 },
    },
  });
}
$(document).on("click", ".show-new_cat", function () {
  var $_this = $(this);
  var $_parent = $_this.closest(".layout-content");
  var $_folder_id = $_this.attr("folder_id");
  $_parent.find(".box-content_aj").hide();
  $_parent.find(".box-pre__load").show();
  $.ajax({
    type: "POST",
    url: path_ajax_script + "/index.php?mod=home&act=ajLoadNewsByCat",
    data: { folder_id: $_folder_id },
    dataType: "html",
    success: function (data) {
      setTimeout(function () {
        $_parent.find(".box-pre__load").hide();
        $_parent.find(".box-content_aj").show();
        $_parent.find(".box-content_aj").html(data);
      }, 2000);
    },
  });
});
$(document).on("click", ".show-course_bytype", function () {
  var $_this = $(this);
  var $_parent = $_this.closest(".layout-content");
  var $_course_type_id = $_this.attr("course_type_id");
  $_parent.find(".box-content_aj").hide();
  $_parent.find(".box-pre__load").show();
  $.ajax({
    type: "POST",
    url: path_ajax_script + "/index.php?mod=home&act=ajLoadCourseByType",
    data: { course_type_id: $_course_type_id },
    dataType: "html",
    success: function (data) {
      setTimeout(function () {
        $_parent.find(".box-pre__load").hide();
        $_parent.find(".box-content_aj").show();
        $_parent.find(".box-content_aj").html(data);
      }, 2000);
    },
  });
});
