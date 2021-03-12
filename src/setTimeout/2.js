myArray = ['zero', 'one', 'two'];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"


setTimeout(myArray.myMethod, 1000)
setTimeout(myArray.myMethod, 1500, 1)



setTimeout.call(myArray ,myArray.myMethod, 1500, 1)
