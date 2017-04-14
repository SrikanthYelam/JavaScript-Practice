//Prototypal Inheritance
//__proto__ is used to set a prototype. There are many other ways to do it.
//like Function 'prototype' property, Object.create(), Object.setPrototypeOf() etc..

var user = {
  name: "Srikanth",
  age: 25,
  login() {
    alert("logged in");
  }
};

var student = {
  isStudent: true,
  __proto__: user
};

var professor = {
  isProf: true,
  login() {
    alert('logged in from prof');
  },
  __proto__: user
};

student.login();
professor.login();

//-------------------------------------------------

let user1 = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user1,
  isAdmin: true
};

alert(admin.fullName); // John Smith 

// setter triggers!
admin.fullName = "Alice Cooper"; 
alert(admin.fullName);
alert(user1.fullName);
