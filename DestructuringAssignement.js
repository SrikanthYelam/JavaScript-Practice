//Destructuring assignment is a special syntax that allows to “unpack” arrays or objects into a bunch of variables, as sometimes they are more convenient.
//Array Destructuring---------------------------------------------------------------------
let arr = ['Srikanth', 'Yelam'];
let [firstName, lastName] = arr;
alert(firstName);
alert(lastName);

//let [firstName, lastName] = "Srikanth Yelam".split(" ");

let [, , Gender] = ['Srikanth', 'Yelam', 'Male'];
alert(Gender);

//…Actually, we can use it with any iterable, not only an array:

let [a, b, c] = "abc";
alert(a);

let [one, two, three] = new Set([1, 2, 3]);
alert(one);

let user = {};
[user.firstName, user.lastName] = "Anil Yelam".split(" ");
alert(user.lastName);

//We can use destructuring to loop over keys-and-values of an object:

let person = {
  name: "Sai",
  age: 13
};

for (let [key, value] of Object.entries(person)) {
  alert(`${key} : ${value}`);
}

//for (let val in person) {
//  alert(val);
//}
//for (let key of Object.keys(person)) {
//  alert(key);
//}

//using rest parameter to convert rest of the list to array.
let [fName, lName, ...otherDetails] = ["Srikanth", "Yelam", "Male", "25"];
alert(otherDetails[0]);
alert(otherDetails[1]);

//Default values
let [name = "Guest", surName = "Anon"] = ["John"];
alert(name);
alert(surName);

// runs only prompt for surname
let [name1 = prompt('name?'), surname1 = prompt('surname?')] = ["Julius"];
alert(name1); // Julius (from array)
alert(surname1);

//Object Destructuring-------------------------------------------------------------------------------------

let obj = {
  title: "Menu",
  width: 200,
  height: 300
};

let {                           //order doesn't matter
  width,
  height,
  title
} = obj;
alert(width);

//we can assign a property to a variable with another name
let options = {
  title1: "Menu",
  width1: 100,
  height1: 200
};
let {width1: w, height1: h, title1} = options;

//we can use rest operator in object destructuring too
//let options = {
//  title: "Menu",
//  height: 200,
//  width: 100
//};
//let {title, ...rest} = options;
//alert(rest.height);  // 200
//alert(rest.width); 


//Nested Destructuring - Objects/Arrays within Objects
let options2 = {
  size2: {
    width2: 100,
    height2: 200
  },
  items2: ["Cake", "Donut"],
  extra2: true    // something extra that we will not destruct
};

// destructuring assignment on multiple lines for clarity
let {
  size2: { // put size here
    width2,
    height2
  },
  items2: [item1, item2], // assign items here
  title2 = "Menu" // not present in the object (default value is used)
} = options2;

alert(title2);  // Menu
alert(width2);  // 100
alert(height2); // 200
alert(item1);  // Cake
alert(item2); 


//Summary
//Destructuring assignment allows to instantly map an object or array into many variables.
//The object syntax:
//let {prop : varName = default, ...} = object
//This means that property prop should go into the variable varName and, if no such property exists, then default value should be used.

//The array syntax:
//let [item1 = default, item2, ...rest] = array
//The first item goes to item1, the second goes into item2, all the rest makes the array rest.

//For more complex cases, the left side must have the same structure as the right one.
