/**
 * array ==> collection of same or different data type
 * array has key/index which is auto gen and it's always starts form "0"
 * if array is [] ==> key/index will be -1
 * how to define a array ?
 */
var array = ["deepak", 25, 31]; // array defined

console.log(array);

/**
 * jsObject ==> collection of same or different data
 * jsObject ==> we can give our own kye/index/property
 * how to define a jsObject
 */

var studentDetails = {
  name: "deepak",
  age: 31,
  rollNo: 25,
}; // jsObject is Defined

/**
 * javascript ArrayObject
 * ObjectArray
 * JSONArray
 * What is JSON ? => Javascript Object Notation
 */

var studentList = [
  { name: "Deepakkumar", age: 31, mobile: 7896547856 },
  { name: "Suraj", age: 30, mobile: 7896547856 },
  { name: "Kishor", age: 28, mobile: 7896547856 },
];
console.log(studentList);

function isEven(a) {
  if (a == undefined) {
    console.log("Please pass a number");
    return false;
  }
  a = Number(a);
  /* 
    'deepak' ==> NaN => isNaN()=> true
    2 => NaN ==> isNaN()=> false
    '2' => 2 => NaN => isNaN()=> false
  */
  if (isNaN(a) == true) {
    console.log("Please pass a valid number");
    return false;
  }

  // ternary operators
  var result = a % 2 == 0 ? "is even" : "is odd";
  console.log(result);
}

isEven("10");
