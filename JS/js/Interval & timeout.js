// Javascript is a single thread programming lang
// Sync in nature

// Use A javascript Async
// Web api(Application Programming Interface)
/**
 * DOM => Document Object Model
 * Promise
 * Async Await
 * setTimeout
 * setInterval
 * xhr & fetch (http communication) *
 */

/* Event Loop */

// call stack ==> One Call Stack => LIFO or FIFO
/**
 * Async code runs at the end
 *  */
// 22 32 28 25
/*console.log("hello js");

setTimeout(function () {
  console.log("server request");
}, 2 * 1000); //3s 1s === 1000ms

setTimeout(function () {
  console.log("server request");
}, 500); //3s 1s === 1000ms

console.log("hello html");*/

/*setInterval(function () {
  var date = new Date();
  var hrs = date.getHours();
  var hrs_ = hrs > 12 ? hrs - 12 : hrs;
  var text = hrs > 12 ? "pm" : "am";

  var min = date.getMinutes();
  var sec = date.getSeconds();

  var time = hrs_ + ":" + min + ":" + sec + " " + text;
  console.log(time); // (+5.30)
}, 2 * 1000);*/

var counter = 10;

var intervalId = setInterval(function () {
  if (counter >= 0) {
    console.log(counter);
    counter--;
  } else {
    clearInterval(intervalId);
    console.log("still i am live");
  }
}, 1 * 1000);
