var someObject = {
  myProperty: 'Foo',
  myMethod: function(a, b) {
    alert(a + this.myProperty + b);
  }
};

someObject.myMethod('<', '>');

var someOtherObject = {
  myProperty: 'Bar'
};

someObject.myMethod.call(someOtherObject, '<', '>');
someObject.myMethod.apply(someOtherObject, ['<', '>']);
