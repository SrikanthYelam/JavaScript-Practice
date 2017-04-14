//There are two kinds of properties.

//The first kind is data properties.The second type of properties is accessor properties. They are essentially functions that work on getting and setting a value, but look like regular properties to an external code.

//A property can either be a “data property” or an “accessor property”, but not both.

let user = {
  name: "Srikanth",
  surname: "Yelam",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

alert(user.fullName);
user.fullName = "Anil Yelam";

alert(user.name);
alert(user.surname);

// create an accessor fullName with defineProperty, we can pass a descriptor with get and set.

let user1 = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user1, 'fullName', {
  get() {
      return `${this.name} ${this.surname}`;
    },

    set(value) {
      [this.name, this.surname] = value.split(" ");
    },
    enumerable: true
    //configurable: false
});

alert(user1.fullName); // John Smith

for (let key in user1) alert(key);
