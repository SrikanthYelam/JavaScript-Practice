//In modern JavaScript we can set a prototype using __proto__. There is another way to set it: to use a "prototype" property of the constructor function.

let animal = {
  eats: true
};

function Rabbit() {
  this.name = name;
}

//alert(JSON.stringify(Rabbit.prototype));
Rabbit.prototype = animal;

var rabbit = new Rabbit("White Rabbit");     //  rabbit.__proto__ == animal
alert(rabbit.eats);
//alert(JSON.stringify(Rabbit.prototype));

//Every function has the "prototype" property even if we don’t supply it.
//The default "prototype" is an object with the only property constructor that points back to the function itself.

function Rabbit1() {}
/* default prototype
Rabbit1.prototype = { constructor: Rabbit1 };
*/
alert( Rabbit1.prototype.constructor == Rabbit1 );
let rabbit1 = new Rabbit1(); // inherits from {constructor: Rabbit}
alert(rabbit1.constructor == Rabbit1); // true (from prototype)

//We can use constructor property to create a new object using the same constructor as the existing one.

function Rabbit2(name) {
  this.name = name;
  alert(name);
}

let rabbit2 = new Rabbit2("White Rabbit");
let rabbit3 = new rabbit2.constructor("Black Rabbit");

//if we replace the default prototype as a whole, then there will be no "constructor" in it.

function Rabbit3() {}
Rabbit3.prototype = {
  jumps: true
};

let rabbit4 = new Rabbit3();
alert(rabbit4.constructor === Rabbit3); // false

//So, to keep the right "constructor" we can choose to add/remove properties to the default "prototype" instead of overwriting it as a whole:

function Rabbit4() {}

// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit4.prototype.jumps = true
// the default Rabbit.prototype.constructor is preserved
//Or, alternatively, recreate the constructor property it manually

Rabbit4.prototype = {
  jumps: true,
  constructor: Rabbit4
};
// now constructor is also correct, because we added it
