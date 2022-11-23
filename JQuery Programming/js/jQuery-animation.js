$(function () {
  $(".btn-hide").on("click", function () {
    $(".text").slideUp(1000);
  });
  $(".btn-show").on("click", function () {
    $(".text").slideDown(1000);
  });

  $(".btn-hide-show").on("click", function () {
    // var interval = null;
    // clearInterval(interval);
    // interval = setInterval(function () {
    $(".text").slideToggle(1000);
    // }, 50);
  });

  var slideIn = true;
  $(".get-in").on("click", function () {
    var move = slideIn == true ? "0%" : "-60%";
    slideIn = !slideIn;
    $(".text").animate(
      {
        left: move,
        color: "#ff0000",
      },
      1000
    );
  });
});
