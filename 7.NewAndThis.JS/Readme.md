# README for JavaScript Code Example

This repository contains a simple JavaScript code example that demonstrates the use of the `new` keyword, `this` keyword, and prototypes in JavaScript. Below is a detailed explanation of the code and the concepts used.

## Code Explanation

### 1. `createuser` Function
```javascript
let createuser = function(username, score){
    this.username = username;
    this.score = score;
}
```
- **`createuser` Function**: This is a constructor function that is used to create user objects. It takes two parameters: `username` and `score`.
- **`this` Keyword**: Inside the function, `this` refers to the newly created object when the function is called with the `new` keyword. It assigns the `username` and `score` properties to the new object.

### 2. Prototype Methods
```javascript
createuser.prototype.increment = function(){
    this.score++;
    return this.score;
}

createuser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
```
- **Prototype Methods**: These methods are added to the `createuser` function's prototype. This means that all instances of `createuser` will share these methods, saving memory.
  - **`increment` Method**: This method increments the `score` property of the object by 1 and returns the new score.
  - **`printMe` Method**: This method logs the current `score` of the object to the console.

### 3. Creating Instances
```javascript
const chai = new createuser('Chai', 200);
const tea = new createuser('tea', 250);
```
- **`new` Keyword**: The `new` keyword is used to create an instance of the `createuser` function. When `new` is used:
  1. A new empty object is created.
  2. The `this` keyword inside the constructor function refers to this new object.
  3. The constructor function is executed with the given arguments.
  4. The new object is returned.

### 4. Using the Methods
```javascript
chai.printMe(); // Output: score is 200
console.log(chai.increment()); // Output: 201
```
- **Using Methods**: The `printMe` method is called on the `chai` instance, which logs the current score. The `increment` method is then called, which increments the score and returns the new value.

## Detailed Explanation of `new` and `this`

### `new` Keyword
The `new` keyword is used to create an instance of a user-defined object type or a built-in object type that has a constructor function. Here’s what happens when you use `new`:

1. **Creates a new object**: A new empty object is created.
2. **Sets the prototype**: The newly created object’s prototype is set to the constructor function’s prototype.
3. **Executes the constructor function**: The constructor function is called with the `this` keyword pointing to the new object.
4. **Returns the new object**: If the constructor function doesn’t return an object, the new object is returned.

#### Example:
```javascript
function Car(make, model) {
    this.make = make;
    this.model = model;
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.make); // Output: Toyota
```

### `this` Keyword
The `this` keyword refers to the object that is executing the current function. Its value depends on how a function is called:

1. **In a method**: `this` refers to the object that owns the method.
2. **In a function**: `this` refers to the global object (in non-strict mode) or `undefined` (in strict mode).
3. **In a constructor function**: `this` refers to the newly created object.

#### Example:
```javascript
const person = {
    name: 'John',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // Output: Hello, my name is John
```

### Prototype
Every JavaScript object has a prototype. The prototype is also an object. When you try to access a property or method on an object, JavaScript will first look for it on the object itself. If it doesn’t find it, it will look at the object’s prototype, and so on up the prototype chain until it either finds the property/method or reaches the end of the chain.

#### Example:
```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John');
john.greet(); // Output: Hello, my name is John
```

In this example, the `greet` method is added to the `Person` prototype, so all instances of `Person` can access it.

## Conclusion
- **`new`**: Used to create instances of objects from constructor functions.
- **`this`**: Refers to the object that is executing the current function.
- **Prototype**: Allows you to add methods and properties to all instances of a constructor function, saving memory and promoting code reuse.

This code demonstrates how to use these concepts to create and manipulate objects in JavaScript.