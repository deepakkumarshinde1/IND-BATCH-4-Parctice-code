var date = new Date();

//date = date.toDateString().split(" ");

// var output = date.getDay() + 1;
// var output = date.getDate();
// var output = date.getMonth() + 1;
// var output = date.getFullYear();

var hrs = date.getHours();
var hrs_ = hrs > 12 ? hrs - 12 : hrs;
var text = hrs > 12 ? "pm" : "am";

var min = date.getMinutes();
var sec = date.getSeconds();

var time = hrs_ + ":" + min + ":" + sec + " " + text;
console.log(time); // (+5.30)
