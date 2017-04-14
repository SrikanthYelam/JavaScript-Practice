//Closures in JavaScript
//Global variables can be made local (private) with closures.

function sum(a) {
  return function(b) {
    return a + b;
  }
}

var func = sum(3);
alert(func(5));
alert(func(6));

alert(sum(3)(5));
alert(sum(3)(6));

//--------------------------------------------------------

function counter() {
  let ctr = 0;
  return function() {
    return ctr++;
  }
}

var c1 = counter();
var c2 = counter();

alert(c1());
alert(c1());

alert(c2());
alert(c2());

//--------------------------------------------------------

function say667() {
  // Local variable that ends up within closure
  var num = 42;
  var say = function() { alert(num); }
  num++;
  return say;
}
var sayNumber = say667();
sayNumber(); 
