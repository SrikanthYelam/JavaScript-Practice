//Mixin is a class that contains methods for use by other classes without having to be the parent class of those other classes.
//In other words, a mixin is a class that implements a certain behavior. But we do not use it alone, we use it to add the behavior to other classes.

//The simplest way to make a mixin in JavaScript – is to make an object with useful methods, that we can just copy into the prototype.

var sayHiMixin = {
  sayHi() {
      alert("Hi " + this.name);
    },
    sayBye() {
      alert("Bye " + this.name);
    }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixin);
var u1 = new User("Srikanth");
u1.sayHi();
u1.sayBye();

//There’s no inheritance, there’s a simple method copying. So User may extend some other class and also include the mixin to “mix-in” the additional methods.
//Mixins also can also make use of inheritance.

var sayMixin = {
  say(phrase) {
    alert(phrase);
  }
};

var sayHiMixin1 = {
  __proto__: sayMixin,
  sayHi() {
    super.say("Hi " + this.name);
  },
  sayBye() {
    super.say("Bye " + this.name);
  }
};

class User1 {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User1.prototype, sayHiMixin1);
var u2 = new User1("Anil");
u2.sayHi();
u2.sayBye();
