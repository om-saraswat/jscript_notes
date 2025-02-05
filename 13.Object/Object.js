const desciptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(desciptor);

//<---this shown the hidden property of math pi function similarly we can assign property to our object--->
// configurable: false;
// enumerable: false;
// value: 3.141592653589793;
// writable: false;
//<--------------------------------------------------------------------------------------------------------->

const Om = {
  name: "om",
  email: "om@gh.com",
};
console.log(Object.getOwnPropertyDescriptor(Om, "name"));

// configurable: true;
// enumerable: true;
// value: "om";
// writable: true;


Object.defineProperty(Om,"name",{
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(Om, "name"));   //we cannot change value of om.name if we change they dont override it.

Om.name = "hello"


console.log(Om.name)


