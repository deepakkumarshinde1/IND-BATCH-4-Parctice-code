var btn = document.getElementById("btn");
btn.addEventListener("click", function () {});

var buttonList = document.querySelectorAll("btn-button");
buttonList.forEach(function (button) {
  button.addEventListener("click", function () {});
});
// JQuery => $

$("#btn").on("click", function () {});

$(".btn-button").on("click", function () {});
