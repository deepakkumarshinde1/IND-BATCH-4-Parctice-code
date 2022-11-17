//  popup
// alphabets , number, symbols => String
// only have a number = Number
// alert("Welcome to js from main file");
// alert("abc123#@");

// store this data
// variables ==> keyword => var
// how to create variable ?
var studentName = "Deepakkumar"; // string
var studentMobileNumber = 8007070845; // number
var studMarks = 50.4; // number
var isPreset = false; // boolean true/false
var stubSubject = null; // object
var studParentName; // undefined

//  below are datatypes of js
/*
    string
    number
    boolean
    object
    undefined

    to check a data type we use "typeof"
*/

var type = typeof studParentName;

// inbuilt in javascript we call it as native/core
//alert(type); // function
// inbuilt object => console

// console.log(type, studMarks, "abc", 123);
// a ...z A...Z _ $
/*
    var a = 10;
    var A = 10;
    var _ = 10;
    var $ = 10;
*/

// javascript case sensitive for variables & keywords
var a = 10;
var A = 50;

// console.log(a, a);

/**  operators */
// Arithmetic operators
// + - / * %
var a = "5"; // string
var b = 2; // number
a = Number(a); // to covert a string number ==> number

//var result = a + b;
// var result = a - b;
// var result = a / b;
// var result = a * b;
// var result = a % b;

var result = a + b; // string + number/string = join/concat

// When a javascript convert a value from one datatype to other => typecasting
// typecasting is done auto => implicate typecasting
// typecasting is done by force => explicate typecasting

// Assignment operators
var a = 10;
//a += 20; //a = a + 20;
//a -= 20; //a = a - 20;
//a /= 20; //a = a / 20;
//a *= 20; //a = a * 20;
a %= 20; //a = a % 20;
// console.log(a);

/** conditional statements */
// if else
/*if (true) {
  console.log("true condition code");
} else {
  console.log("false condition code");
}*/

// Conditional operators
/*
    ==
    !=
    >
    >=
    <
    <=
*/
/*
var a = 9;
var b = 8;
if (a != b) {
  console.log("yes");
} else {
  console.log("no");
}*/

// Logical operators
// AND ==>  conditionOne && conditionTwo  LHS (t) && RHS (t) ==> True ==> O/P is True
// OR ==>  conditionOne || conditionTwo  LHS (f) || RHS(f) ==> False => O/P is false
// NOT ==>  !

var a = 11;
var b = 10;
var c = 11;

// if (a == b || b === c) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

/*
    var data = false;
    data = !data;
    console.log(data);
*/

/** conditional statements */
// if else
// if
// if else
// if else if else

var studentDepartment = "IT"; // Science , Arts, Commerce
/*
if (studentDepartment == "Science") {
  console.log("Welcome to Science department");
} else if (studentDepartment == "Arts") {
  console.log("Welcome to Arts department");
} else if (studentDepartment == "Commerce") {
  console.log("Welcome to Commerce department");
} else {
  console.log("Invalid Department");
}*/

switch (studentDepartment) {
  case "Science":
    console.log("Welcome to Science department");
    break;

  case "Arts":
    console.log("Welcome to Arts department");
    break;

  case "Commerce":
    console.log("Welcome to Commerce department");
    break;

  default:
    console.log("Invalid Department");
    break;
}
