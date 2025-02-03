# JavaScript Promises Explained

This document explains different types of Promises in JavaScript with easy-to-understand explanations, approaches, real-world scenarios, and code breakdowns.

## What is a Promise?
A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

### States of a Promise:
1. **Pending**: Initial state, before the Promise succeeds or fails.
2. **Resolved (Fulfilled)**: Operation completed successfully.
3. **Rejected**: Operation failed.

---
## 1. First Type of Promise (Basic Promise)
```js
const promiseOne = new Promise(function(resolve, reject){
      setTimeout(() => {
        console.log("async task 1")
        resolve()
      }, 1000);
})

promiseOne.then(function(){
    console.log('async resolve')
})
```
### Explanation:
- A new `Promise` is created with a `resolve` function.
- Inside the `setTimeout`, a message is logged, and then `resolve()` is called.
- The `.then()` executes after the `resolve()` function, logging `async resolve`.

### Approach:
- Used for simple asynchronous operations where you don’t need to return any value.
- Best for running delayed tasks like logging or UI updates.

### Real-World Scenario:
- Showing a **loading spinner** for 1 second before displaying content.

---
## 2. Second Type of Promise (Inline Promise)
```js
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2')
        resolve();
    },1000)
}).then(()=>{
    console.log('async 2 resolve')
})
```
### Explanation:
- The promise is created and executed immediately.
- It logs `async task 2` after 1 second, then resolves.
- The `.then()` runs after `resolve()`, logging `async 2 resolve`.

### Approach:
- Ideal for quick, one-time asynchronous operations.
- No need to store the promise in a variable if it is not reused.

### Real-World Scenario:
- Fetching **temporary data** like user session details.

---
## 3. Third Type of Promise (Promise Returning Data)
```js
const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"chai", email:"chai@example.com"})
    },1000)
})

promisethree.then(function(user){    
    console.log(user.username)
})
```
### Explanation:
- The promise resolves with an object `{username, email}`.
- The `.then()` receives the resolved data and logs the `username`.

### Approach:
- Used when fetching data from an API or database.
- The resolved value is passed to `.then()` for further processing.

### Real-World Scenario:
- Fetching **user details** from a remote API and displaying them on the UI.

---
## 4. Fourth Type of Promise (Handling Errors)
```js
const promisefour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve('async work')
        }
        else{
            reject('error')
        }
    }, 1000);
})

promisefour.then(()=>{
    console.log('async 4 resolved')
}).catch(()=>{
    console.log('error')
})
```
### Explanation:
- The promise conditionally either resolves or rejects.
- If resolved, `async 4 resolved` is logged.
- If rejected, `.catch()` executes, logging `error`.

### Approach:
- Used when an operation might fail.
- Rejecting a Promise triggers `.catch()`, allowing for proper error handling.

### Real-World Scenario:
- Handling **failed login attempts** where wrong credentials lead to an error message.

---
## 5. Fifth Type of Promise (Using Finally)
```js
const promisefive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve('async work')
        }
        else{
            reject('error')
        }
    }, 1000);
})

promisefive
.then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('Promise is either resolved or rejected')
})
```
### Explanation:
- Regardless of success or failure, `.finally()` executes.

### Approach:
- `.finally()` ensures that some code runs regardless of success or failure.
- Useful for tasks like closing loaders, resetting UI elements, or logging.

### Real-World Scenario:
- **Hiding a loading animation** whether the API call succeeds or fails.

---
## 6. Sixth Type of Promise (Using Async/Await Without Error Handling)
```js
const promiseSix = new Promise((resolve, reject) => {
    let error = true
    if(!error){
        setTimeout(function(){
            resolve({username:"chai", email:"chai@example.com"})
        },1000)
    }
    else{
        reject('Error')
    }  
})

async function consumepromisesix(){
    const response = await promiseSix 
    console.log(response);
}

consumepromisesix()
```
### Explanation:
- Uses `await` but **does not handle errors**, leading to potential runtime crashes.

### Approach:
- Uses `async/await` for cleaner syntax.
- **However, it lacks error handling**, making it risky in real-world applications.

### Real-World Scenario:
- Fetching **weather data** from an API, but no error handling means it will crash on failure.

---
## 7. Seventh Type of Promise (Using Try-Catch for Error Handling)
```js
const promiseSeven = new Promise((resolve, reject) => {
    let error = true
    if(!error){
        setTimeout(function(){
            resolve({username:"chai", email:"chai@example.com"})
        },1000)
    }
    else{
        reject('Error')
    }  
})

async function consumepromiseseven(){
    try{
        const response = await promiseSeven
        console.log(response);
    }
    catch(error){
        console.log('error')
    }
}

consumepromiseseven();
```
### Explanation:
- Uses `async/await` with `try-catch` to properly handle errors.

### Approach:
- Preferred for handling API calls and operations where failures are expected.

### Real-World Scenario:
- Making an **e-commerce checkout request**, where failure (e.g., payment declined) needs to be handled gracefully.

---
## Important Notes:
1. **Always handle errors** using `.catch()` or `try-catch`.
2. **Use `.finally()`** when you need cleanup code to run regardless of success or failure.
3. **Prefer `async/await` over `.then()` for better readability**.
4. **Remember that `await` stops execution until the promise resolves or rejects**.
5. **Always use `try-catch` in async functions to handle rejections properly**.

This document helps you understand JavaScript Promises in different ways and ensures you don’t forget key concepts. Happy coding! 🚀

