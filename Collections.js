//Map, Set, WeakMap and WeakSet

//Map is a collection of keyed data items. Just like an Object. But the main difference is that Map allows keys of any type.The main methods are:
//new Map() – creates the map.
//map.set(key, value) – stores the value by the key.
//map.get(key) – returns the value by the key.
//map.has(key) – returns true if the key exists, false otherwise.
//map.delete(key) – removes the value by the key.
//map.clear() – clears the map
//map.size – is the current elements count.

let map = new Map();
map.set('1', 'str1'); // a string key
map.set(1, 'num1'); // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would keys to string
// Map keeps the type, so these two are different:
alert(map.get(1)); // 'num1'
alert(map.get('1')); // 'str1'
alert(map.size); // 3

//Map can also use objects as keys.

let john = {
  name: 'John'
};
let UserMap = new Map();
UserMap.set(john, 123);
alert(UserMap.get(john));

//When a Map is created, we can pass an array (or another iterable) with key-value pairs, like this:
let exMap = new Map([
  [1, 123],
  ['1', 234],
  ['sri', 'sri']
]);
exMap.forEach(alert);

//There is a built-in method Object.entries(obj) that returns the array of key/value pairs for an object exactly in that format.So we can initialize a map from an object like this:

let exMap1 = new Map(Object.entries({
  1: 123,
  '1': 234,
  'sri': 'sri'
}));
exMap1.forEach(function(value, key, map) {
  alert(`${key} : ${value}`);
});

//For looping over a map, there are 3 methods:
//map.keys() – returns an iterable for keys,
//map.values() – returns an iterable for values,
//map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for(let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomateos, onion
}

// iterate over values (amounts)
for(let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for(let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,50 (and so on)
}


//Set – is a collection of values, where each value may occur. Set keeps only unique values. The main methods are:
//new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
//set.add(value) – adds a value, returns the set itself.
//set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
//set.has(value) – returns true if the value exists in the set, otherwise false.
//set.clear() – removes everything from the set.
//set.size – is the elements count.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for(let user of set) {
  alert(user.name); // John (then Pete and Mary)
}

//Iteration over set
let set = new Set(["oranges", "apples", "bananas"]);
for(let value of set) alert(value);

set.forEach((value, valueAgain, set) => {
  alert(value);
});
//Note the funny thing. The forEach function in the Set has 3 arguments: a value, then again a value, and then the target object. Indeed, the same value appears in the arguments twice.That’s made for compatibility with Map where forEach has three arguments.

//The same methods as Map has for iterators are also supported:
//set.keys() – returns an iterable object for values,
//set.values() – same as set.keys, for compatibility with Map,
//set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.


//WeakSet is a special kind of Set that does not prevent JavaScript from removing its items from memory. WeakMap is the same thing for Map.The first difference from Map/Set is that their keys must be objects, not primitive values:
//In a regular Map, if we store an object as the key or as a value – does not matter, then it is stored there even if there are no more references to it.

let john = { name: "John" };
let map = new Map();
map.set(john, "...");
john = null; // overwrite the reference
// john is stored inside the map
// we can get it by using map.keys()

let john1 = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john1, "...");
john = null; // overwrite the reference 
// john is removed from memory!

//…And WeakMap/WeakSet does not support methods keys(), values(), entries(), we can not iterate over it. So there’s really no way to receive all keys or values from it.
//WeakMap has only the following methods: (so does WeakSet)
//weakMap.get(key)
//weakMap.set(key, value)
//weakMap.delete(key, value)
//weakMap.has(key)


//Summary
//Map – is a a collection of keyed values. The differences from a regular Object:
//Any keys, objects can be keys.
//Iterates in the insertion order.
//Additional convenient methods, the size property.

//Set – is a collection of unique values.
//Unlike an array, does not allow to reorder elements.
//Keeps the insertion order.

//WeakMap – a variant of Map that allows only objects as keys and removes them once they become unaccessible by other means.It does not support operations on the structure as a whole: no size, no clear(), no iterations.

//WeakSet – is a variant of Set that only stores objects and removes them once they become unaccessible by other means.
//Also does not support size/clear() and iterations.

//WeakMap and WeakSet are used as “secondary” data structures in additional to the “main” object storage. Once the object is removed from the main storage, so it only stays in WeakMap/WeakSet, they clean up aumatically.
