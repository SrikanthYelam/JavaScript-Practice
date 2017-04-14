//for..in and for..of loops

let salaries = {
  john: 100,
  jake: 200,
  Jessi: 300
};

for (let val in salaries) {                       //loops over properties/keys of an object
  alert(val);
}

function SumSalaries(salaries) {
  let sum = 0;
  for (let val of Object.values(salaries)) {
    sum += val;
  }
  return sum;
}

alert(SumSalaries(salaries));

//-------------------------------------------------------------

let list = [4, 5, 6];

for (let i in list) {                            //loops over keys/indexes
   alert(i); // "0", "1", "2",
}

for (let i of list) {                            //loops over values
   alert(i); // "4", "5", "6"
}


//foreach is an method that is available only in Array objects. It allows you to iterate through elements of an array. When invoked it takes a callback function and invokes the callback once for every array element. The callback can access both index and value of the array elements. foreach is available only for looping arrays.

//for in is used to loop through properties of an object. It can be any object. for in allows you to access the keys of the object but doesn’t provide reference to the values. In JavaScript object properties themselves have internal properties. One of the internal properties is [[Enumerable]]. for in will only walkthrough a property if it has [[Enumerbale]] set to true. It not used to iterate elements of an collection rather used to iterate properties of objects.

//for of is a new way for iterating collections. Its introduced in ES6. Earlier you had to use for or while loop to iterate through elements of an collection. For for of to work on an collection, the collection must have an [Symbol.iterator] property.
