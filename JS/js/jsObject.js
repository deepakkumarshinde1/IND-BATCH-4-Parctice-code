/*var obj = {
  location: "Nashik",
};

// add data in object
obj["name"] = "deepakkumar";

// delete object data
delete obj.location;

console.log(obj);*/

var employeeDetails = {
  "0-1": 20,
  "1-2": 50,
  "2-7": 150,
  "above 7": 950,
};

// all property in an array
var prop = Object.keys(employeeDetails);
// all values in an array
var value = Object.values(employeeDetails);
console.log(value);

// convert all the array in object
var array = Object.entries(employeeDetails);
console.log(array);

/*

calc('+',2,3);

add,sub,mul,div

'add of 2+3=5'

calc('/',2,0);
'cant div by zero'

calc('_',2,3);
'invalid operation'*/

calc("_", "5", 0);

function calc(sign, varOne, varTwo) {
  varOne = Number(varOne);
  varTwo = Number(varTwo);

  if (isNaN(varOne) || isNaN(varTwo)) {
    console.error("Invalid Number Passed");
    return false;
  }

  switch (sign) {
    case "+":
      var result = varOne + varTwo;
      console.log(result);
      break;

    case "-":
      var result = varOne - varTwo;
      console.log(result);
      break;

    case "/":
      if (varTwo == 0) {
        console.error("Cant Divide by zero");
      } else {
        var result = varOne / varTwo;
        console.log(result);
      }
      break;

    case "*":
      var result = varOne * varTwo;
      console.log(result);
      break;

    default:
      console.error("invalid operation");
      break;
  }
}
