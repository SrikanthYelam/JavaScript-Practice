//The rest parameters can be mentioned in a function definition 
//with three dots '...' 
//They literally mean: “gather the remaining parameters into an array”.
//The ...rest must always be the last parameter.

function showName(firstName, lastName, ...titles) {
  alert(firstName + ' ' + lastName); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  alert(titles[0]); // Consul
  alert(titles[1]); // Imperator
  alert(titles[2]);
  alert(titles[3]);
  //alert(titles.length); // 4

//  for (var i = 0; i < titles.length; i++) {
//    alert(titles[i]);
//  }
}

showName("Julius", "Caesar", "Consul", "Imperator", "Test", "Test1");

//------------------------------------------------------------------

//Spread operator looks similar to rest parameters, also using ..., but does quite the opposite.
//When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); 

//Also spread operator can be used to merge arrays:

let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];
let merged = [0, ...arr3, 2, ...arr4];
alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

//we use spread operator to turn the string into array of characters:

let str = "Hello";
alert( [...str] ); // H,e,l,l,o

//For this particular task we could also use Array.from, because it converts an iterable (like a string) into an array:

// Array.from converts an iterable into an array
alert( Array.from(str) );




//When we see "..." in the code, it is either rest parameters or the spread operator.

//There’s an easy way to distinguish between them:

//When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list into the array.
//When ... occurs in a function call or alike, it’s called a “spread operator” and expands an array into the list.

//Use patterns:

//Rest parameters are used to create functions that accept any number of arguments.
//The spread operator is used to pass an array to functions that normally require a list of many arguments.
