$(document).ready(function () {
  $(".radio-btn").on("click", function () {
    $(".radio-inner").toggleClass("active");
    $("body").toggleClass("white");
  });
});
