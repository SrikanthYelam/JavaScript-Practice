//In JavaScript there are several well-known programming patterns to make classes even without using the class keyword. like Functional Class pattern, Factory class pattern, Prototype based classes..

//Functional class pattern

function student(name, age) {
  this.name = name;
  this.age = age;

  //memebers that are not assigned to this, are visible from inside, but not accessible by the outer code
  function showAge() {
    return age;
  }

  this.sayHi = function() {
    alert("Hi " + this.name + ", age : " + showAge());
  }
}

var s1 = new student("Srikanth", 25);
s1.sayHi();

//Factory class pattern - we can omit 'new'

function student1(name, age) {
  function showAge() {
    return age;
  }

  return {
    sayHi() {
      alert("Hi " + name + ", age : " + showAge())
    }
  };
}

var s2 = student1("Anil", 24);
s2.sayHi();

//Prototype based classes

function student2(name, age) {
  this._name = name;
  this._age = age;
}

student2.prototype._showAge = function() {
  return this._age;
};

student2.prototype.sayHi = function() {
  alert("Hi " + this._name + ", age : " + this._showAge())
}

var s3 = new student2("Sai", 13);
s3.sayHi();

//Here are the advantages over the functional pattern:

//In the functional pattern, each object has its own copy of every method. We assign a separate copy of this.sayHi = function() {...} and other methods in the constructor.
//In the prototypal pattern, all methods are in User.prototype that is shared between all user objects. An object itself only stores the data.
//So the prototypal pattern is more memory-efficient.


//Using class syntax

class student3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHi() {
    alert("Hi " + this.name + ", age : " + this.age);
  }
}

var s4 = new student3("Hari", 30);
s4.sayHi();
