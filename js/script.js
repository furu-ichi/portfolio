// ハンバーガーメニュークリック時
$("#js-header__icon").on("click", function () {
  $("#js-header__nav").slideToggle(200);
  $(this).toggleClass("is-checked");
  $("body").toggleClass("is-fixed");
});

// ドロワーメニュークリック時
$(".header__nav-link").on("click", function () {
  if (window.innerWidth < 768) {
    $("#js-header__icon").removeClass("is-checked");
    $("body").removeClass("is-fixed");
    $("#js-header__nav").slideUp(200);
  }
});

// ドロワーのServiceクリック時
$('a[href="#service"]').on("click", function () {
  console.log("serviceクリック");
});
