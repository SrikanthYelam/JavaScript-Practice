//Cloning Objects

var bob = {
  name: "Bob",
  Age: 25
};

//Normal copy, doesn't work. If we change the value in copied obj, value in the original object also1 changes. 
//var billsample = bob;
//billsample.name = "bill";
//alert(bob.name);
//alert(billsample.name);

//using Javascript (recursive function to clone an object)
function cloneObject(obj) {
  if (obj === null || typeof(obj) !== 'object') {
    return obj;
  }

  var temp = obj.constructor(); // give temp the original obj's constructor
  for (var key in obj) {
    temp[key] = cloneObject(obj[key]);
  }
  return temp;
}

var bill0 = cloneObject(bob);
bill0.name = "bill0";

alert(bob.name);
alert(bill0.name);

//using JSON library----------------------------------------
var bill = JSON.parse(JSON.stringify(bob));
bill.name = "Bill";

alert(bob.name);
alert(bill.name);

//using JQuery extend() function--------------------------------
var bill1 = $.extend(true, {}, bob);
bill1.name = "Bill1";

alert(bob.name);
alert(bill1.name);

//using MooTools clone function-------------------------------------
var bill2 = Object.clone(bob);
bill2.name = "Bill2";

alert(bob.name);
alert(bill2.name);
