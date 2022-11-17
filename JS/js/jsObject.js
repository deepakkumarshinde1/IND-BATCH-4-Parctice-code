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
