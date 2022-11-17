// var result = Math.sqrt(500);
var number = 1.01;
// var result = Math.round(number);
// var result = Math.floor(number);
// var result = Math.ceil(number);

//var pie = 3.1456;//22/7
// var result = Math.PI;

// areaOfCircle = pi r^2
var result = Math.pow(2, 3); // 1024

var areaOfCircle = Math.PI * Math.pow(5, 2);
areaOfCircle = areaOfCircle.toFixed(3);

// gen otp or random number
var otp = Math.random(); // 0...1
otp = otp * 100000;
otp = Math.floor(otp);
console.log(otp);
