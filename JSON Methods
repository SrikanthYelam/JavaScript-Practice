//JSON Methods
//convert an object into a string, to send it over a network, or just to output it for logging purposes.
//Can be done using toString() method of object, but it can become a pain if there are many properties or if we add new properties in future. So we use JSON.stringify method to convert objects into JSON.
//JSON.parse() - to convert JSON back into an onject.

var obj = {
  name: "Srikanth",
  Gender: "Male",
  age: 25,

  toString() {
    return `name : "${this.name}", Gender : "${this.Gender}", age : ${this.age}`;
  }
};

alert(obj);

//or use JSON (without toString method)
let json = JSON.stringify(obj);
alert(json);

//JSON.stringify can be applied to primitives as well.Natively supported JSON types are:
//Objects { ... }, Arrays [ ... ], Primitives, strings, numbers, boolean values,null.

//JSON is data-only cross-language specification, so some JavaScript-specific object properties are skipped by JSON.stringify, namely:
//Function properties (methods).
//Symbolic properties.
//Properties that store undefined.

let user = {
  sayHi() { // ignored
      alert("Hello");
    }, [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};
alert(JSON.stringify(user)); // {} (empty object)

//The full syntax of JSON.stringify is: let json = JSON.stringify(value[, replacer, space])
//value - A value to encode.
//replacer - Array of properties to encode or a mapping function function(key, value).
//space - Amount of space to use for formatting

let rep = {
  name: "Anil",
  Gender: "Male",
  age: 24
};

//let jsonobj = JSON.stringify(rep, ['name', 'age'], 2);
let jsonobj = JSON.stringify(rep, function(key, value) {
  return (key == "Gender" ? undefined : value); //don't include gender
}, 4);
alert(jsonobj);

//Custom 'toJSON'
//Like toString for a string conversion, an object may provide method toJSON for to-JSON conversion. JSON.stringify automatically calls it if available.

let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};
let meetup = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room
};
alert(JSON.stringify(meetup));
/*output
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)
    "room": 23              // (2)
  }
*/
//Here we can see that date (1) became a string. That’s because all dates have a built-in toJSON method which returns such kind of string. and we have added custom toJSON() to room object which returned output as number, not as an object. (2) 

//JSON.parse()----------------------------------------------------------------------------------------------------------

//let value = JSON.parse(str[, reviver]);
//str - JSON-string to parse.
//reviver - Optional function(key,value) that will be called for each (key,value) pair and can transform the value.

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let obj = JSON.parse(str);
//alert(obj.date.getDate());    //throws an error because the value of obj.date is a string, not a Date object. 

//Let’s pass to JSON.parse the reviving function that returns all values “as is”, but date wll become a Date:
let obj1 = JSON.parse(str, function(key, value) {
  if (key == 'date') {
    return new Date(value);
  }
  return value;
});
alert(obj1.date.getDate());


//Summary
//JSON is a data format that has its own independent standard and libraries for most programming languages.
//JSON supports plain objects, arrays, strings, numbers, booleans and null.
//JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
//Both methods support transformer functions for smart reading/writing.
//If an object has toJSON, then it is called by JSON.stringify.
