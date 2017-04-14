//Global Object - window

var phrase = "Hello";

function sayHi() {
  alert(phrase);
}

// can read from window
alert(window.phrase); // Hello (global var)
alert(window.sayHi); // function (global function declaration)

// can write to window (creates a new global variable)
window.test = 5;

alert(test); // 5


//…But the global object does not have variables declared with let/const!

let user = "John";
alert(user); // John

alert(window.user); // undefined, don't have let
alert("user" in window); // false

//Sometimes, the value of this is exactly the global object. 

alert( this === window );
