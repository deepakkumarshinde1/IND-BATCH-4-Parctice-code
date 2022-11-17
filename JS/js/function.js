var a1 = 20;
var b1 = 20; // global variable
// what is a function ?
/**
 * function is a block of code ,
 * which  is use to perform a task again and again.
 * */

// () => arguments
// {} => write a code

// NaN => Not a number

/**
 * default parameter => if pass function call parameters so in that case
 * we can set a default value to function definition parameter
 */
/**
 * a parameter in function call is called as a "actual parameter"
 * a parameter in function definition is called as a "formal parameter"
 */
function add(varOne = 0, varTwo = 0) {
  console.log(varOne, varTwo);
  var result = varOne + varTwo; // result => local variable
  console.log(result);
} // function definition

add(a1, b1); // function call
add(10, 5); // actual parameter
add(50);
