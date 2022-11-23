// create instance
var btnStart = document.getElementById("btnStart");
var btnRestart = document.getElementById("btnRestart");
var stopWatchText = document.getElementById("stopWatchText");
var counter = 0;
var intervalID = null;

btnStart.addEventListener("click", function (event) {
  if (btnStart.innerHTML === "Start") {
    btnStart.innerHTML = "Pause";
    stopWatch();
  } else {
    btnStart.innerHTML = "Start";
    clearInterval(intervalID);
  }
});

btnRestart.addEventListener("click", function (event) {
  counter = 0;
  btnStart.innerHTML = "Pause";
});

function stopWatch() {
  intervalID = setInterval(function () {
    counter++;
    stopWatchText.innerHTML = counter;
  }, 1);
}
