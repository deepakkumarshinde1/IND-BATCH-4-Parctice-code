/**
 * count the data
 * add data in array
 * remove data in data
 * read data
 * search the particular element
 * recreate the array
 */
// count the data

var restaurantList = [
  {
    name: "Hotel Taj",
    city: "Mumbai",
    minCost: 999,
  },
  {
    name: "KFC",
    city: "Pune",
    minCost: 60,
  },
  {
    name: "Dominos",
    city: "Pune",
    minCost: 99,
  },
];
var count = restaurantList.length;
console.log(count);

// add data to array => push
var newRestaurant = {
  name: "Green Cafe",
  city: "Nashik",
  minCost: 50,
};

restaurantList.push(newRestaurant);

//remove data from array we use => splice
// restaurantList.splice(index,deleteCount,replacement Data)
/*restaurantList.splice(1, 1);
console.log(restaurantList);*/

// read array
// console.log(restaurantList[1]); ==> single data

restaurantList.forEach(function (value, index) {
  var restaurant = value;
  //console.log(restaurant);
  // callback function
});

/**
 * callback function => a function definition written in other function all
 * called as "callback function"
 * callback function don't have name
 *
 * in above example forEach is higher order function
 */

//search the particular element
/**
 * single search => find
 * multi search => filter
 */
/**
 * find =>
 * find method returns only one data on result match
 * if match is not found we get "undefined"
 */
var search = "Kota";
var searchResult = restaurantList.find(function (value, index) {
  return search == value.city;
});
/**
 * filter =>
 * filter method returns all match match data
 * if match is not found we get []
 */
var search = "Pune1";
var searchResult = restaurantList.filter(function (value, index) {
  return search == value.city;
});

//console.log(searchResult);

// recreate array => map
var newArray = restaurantList.map(function (value, index) {
  return "<li>" + value.city + "</li>";
});
// convert array to string => join('')
newArray = newArray.join("");
console.log(newArray);

/***
 * method chaining
 */
var finalList = restaurantList
  .map(function (value, index) {
    return "<li>" + value.city + "</li>";
  })
  .join();

/**
 * length
 * push()
 * splice()
 * find()
 * filter()
 * map()
 * join()
 *
 * findIndex()
 * reduce()
 * sort()
 * pop()
 * shift()
 * unshift
 * slice
 */
