// create instance
var inputOne = document.getElementById("inputOne");
var inputTwo = document.getElementById("inputTwo");
var btnMakeAdd = document.getElementById("makeAdd");
var resultText = document.getElementById("resultText");

// console.log(inputOne);
// console.log(inputTwo);
// console.log(btnMakeAdd);
// console.log(resultText);

//  if we want to get/set the input,select,textarea values
// we will use ".value" prop
btnMakeAdd.addEventListener("click", function (event) {
  var valueOne = inputOne.value; // get input value
  var valueTwo = inputTwo.value; // get input value

  valueOne = Number(valueOne); // converting a str to num
  valueTwo = Number(valueTwo);

  resultText.innerHTML = valueOne + valueTwo; // setting text to html element

  inputOne.value = "";
  inputTwo.value = "";
  console.log(typeof valueOne, valueTwo);
});
