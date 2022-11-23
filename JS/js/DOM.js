// Javascript is a single thread programming lang
// Sync in nature

// Use A javascript Async
// Web api(Application Programming Interface)
/**
 * DOM => Document Object Model
 * Logical representation of html page
 * Where every element => object
 * & its attribute => a prop
 *
 * HTML => root element & tree always start with HTML
 * we have a spacial object called as "document"
 */

/**
 * Events ==> User action
 *  eg. click, dblclick , pressing key, drag ,drop,moving mouse
 *
 */

/**
 * document is having some methods
 *  document.getElementById()
 *  document.getElementsByClassName()
 *  document.getElementsByTagName()
 *  document.querySelectorAll()
 *  document.querySelector()
 */

// create a element instance
var inc = document.getElementById("buttonOne");
var dec = document.getElementById("buttonTwo");
var countText = document.getElementById("counterText");
var counter = 0;
// we will get "element" or we will get "null"
console.log(inc);

// to set a data/text to html from js we use a
// prop called as "innerHTML"

// want add event to it
inc.addEventListener("click", function (event) {
  counter++;
  countText.innerHTML = counter;
  console.log("inc", counter);
});

dec.addEventListener("click", function (event) {
  counter--;
  countText.innerHTML = counter;
  console.log("dec", counter);
});
