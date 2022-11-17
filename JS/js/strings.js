var text = "India-is-my-country,it.awesome.jpeg";
// convert call letters to capital
text = text.toUpperCase();

// convert call letters to small
text = text.toLowerCase();

// string to array
//text = text.split(" ");

var pos = text.lastIndexOf(".");
text = text.substring(pos);

console.log(text);
