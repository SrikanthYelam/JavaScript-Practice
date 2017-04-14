//Arrays in JavaScript

//The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

let fruits = [];
fruits[123] = "Apple";

alert( fruits.length ); // 124


//Summary

//Array is a special kind of objects, suited to store and manage ordered data items.

//The declaration:
// square brackets (usual) - let arr = [item1, item2...];
// new Array (exceptionally rare) - let arr = new Array(item1, item2...);

//We can use an array as a deque with the following operations:
//push(...items) adds items to the end.
//pop() removes the element from the end and returns it.
//shift() removes the element from the beginning and returns it.
//unshift(...items) adds items to the beginning.

//To loop over the elements of the array:
//for(let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
//for(let item of arr) – the modern syntax for items only,
//for(let i in arr) – never use. (returns items + properties)

//Array methods in JavaScript

//The arr.splice(str) method is a swiss army knife for arrays. It can do everything: add, remove and insert elements.
//arr.splice(index[, deleteCount, elem1, ..., elemN])

let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert( arr ); // ["I", "JavaScript"]

let arr1 = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them by another
arr1.splice(0, 3, "Let's", "dance")
alert( arr1 ); // now ["Let's", "dance", "right", "now"]

let arr2 = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arr2.splice(0, 2);
alert( removed );

//The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

let arr3 = ["I", "study", "JavaScript"];
arr3.splice(2, 0, "complex", "language");
alert( arr3 ); 

//-----------------------------------------------------------------------------
//arr.slice(start, end)

let str = "test";
let array = ["t", "e", "s", "t"];

alert( str.slice(1, 3) ); // es
alert( array.slice(1, 3) ); // e,s

alert( str.slice(-2) ); // st
alert( array.slice(-2) ); // s,t

//--------------------------------------------------------------------------

//The method arr.concat joins the array with other arrays and/or items. arr.concat(arg1, arg2...)

//The methods arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax and do essentially the same as their string counterparts, but operate on items instead of characters:
//arr.indexOf(item, from) looks for item starting from index from, and returns the index where it was found, otheriwse -1.
//arr.lastIndexOf(item, from) – same, but looks from right to left.
//arr.includes(item, from) – looks for item starting from index 'from', returns true if found.

//find - returns element based on the condition
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let user = users.find(item => item.id == 1);
alert(user.name); // John
//The arr.findIndex method is essentially the same, but it returns the index where the element was found instead of the element itself.

//The find method looks for a single (first) element that makes the function return true. If there may be many, we can use arr.filter(fn). The syntax is roughly the same as find, but it returns an array of matching elements:

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2

//The arr.map method calls the function for each element of the array and returns the array of results.
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

//The method arr.sort sorts the array at place.
let arr = [ 1, 2, 15 ];
arr.sort();
alert( arr );  //Outputs 1,15,2 because the items are sorted as strings by default.

arr.sort(function(a, b) { return a - b; });
alert(arr);  // 1, 2, 15

//The method arr.reverse creates a new array with the reverse order.
let arr1 = [1, 2, 3, 4, 5];
alert( arr1.reverse() ); // 5,4,3,2,1

//The str.split(delim) method splits the string into an array by the given delimiter delim.
let names = 'Bilbo, Gandalf, Nazgul';
let arr2 = names.split(', ');
for (let name of arr2) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}
//The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. 
let arr3 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
alert(arr3); // Bilbo, Gandalf

//The call arr.join(str) does the reverse to split. It creates a string of arr items glued by str beween them.
let arr4 = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr4.join(';');
alert( str ); // Bilbo;Gandalf;Nazgul

//When we need to iterate over an array – we can use forEach.
//When we need to iterate and return the data for each element – we can use map.
//The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.
//Syntax:
//let value = arr.reduce(function(previousValue, item, index, arr) {
  // ...
//}, initial);

let array = [1, 2, 3, 4, 5];
let result = array.reduce((sum, current) => sum + current, 0);
//let result = array.reduce(function(sum, current){return sum + current;}, 0);
alert( result ); // 15

//The method arr.reduceRight does the same, but goes from right to left.

//The arr.forEach method allows to run a function for every element of the array.
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});


//arr.some(fn)/arr.every(fn) checks the array.
//The function fn is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.

//arr.fill(value, start, end) – fills the array with repeating value from index start to end.

//arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).
