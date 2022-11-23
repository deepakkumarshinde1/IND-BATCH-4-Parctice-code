// time store in mili sec =
// 1 == 24*60*60

// document.cookie = "name=Deepakkumar;max-age=86400;path=/";
/*var cookie = document.cookie;
console.log(cookie);*/

// localStorage

console.log(localStorage);

var array = [{ name: "a" }, { name: "b" }, { name: "c" }];

/***    Add/Insert Data */
// in localStorage value are always = string
//localStorage.setItem("name", "deepak");
//localStorage.setItem("number", 1234);

// before storing we can convert JSON array to JSON pattern string
//JSON.stringify(); => convert JSON array to JSON pattern string
//JSON.parse(); => convert JSON pattern string to JSON array

//localStorage.setItem("list", JSON.stringify(array));

/************************* Read Data */

var dataOne = localStorage.getItem("name");
var dataTwo = localStorage.getItem("number");
var dataThree = localStorage.getItem("list");
dataThree = JSON.parse(dataThree);
console.log(dataThree);

/********************* update */

localStorage.setItem("name", "santosh");

/********************* delete */
localStorage.removeItem("name"); // will remove only one item
localStorage.clear();
