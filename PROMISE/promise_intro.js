//<---First type of Promise--->
const promiseOne = new Promise(function(resolve,reject){
      setTimeout(() => {
        console.log("async task 1")
        resolve()
      }, 1000);
})
promiseOne.then(function(){
    console.log('async resolve')
})

//<---Second type of Promise--->

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2')
        resolve();
    },1000)
}).then(()=>{
    console.log('async  2 resolve')
})

//<---3rd type of Promise--->

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

promisethree.then(function(user){    
    console.log(user.username)
})

//<---Fourth type of Promise--->

const promisefour = new Promise(function(resolve,reject){
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


//<---Fiveth type of Promise--->
const promisefive = new Promise(function(resolve,reject){
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
    console.log('Promise is either resolve or reject')
})

// <---Sixth type of Promise--->
const promiseSix = new Promise((resolve, reject) => {
    let error = true
    if(!error){
        setTimeout(function(){
            let error = 'true'
            resolve({username:"chai",email:"chai@example.com"})
        },1000)
    }
    else{
        reject('Error')
    }  

})


async function consumepromisesix(){
    const response = await promiseSix // these donot handle the error 
    console.log(response);
}

consumepromisesix()
// <---Seventh type of Promise--->
const promiseSeven = new Promise((resolve, reject) => {
    let error = true
    if(!error){
        setTimeout(function(){
            let error = 'true'
            resolve({username:"chai",email:"chai@example.com"})
        },1000)
    }
    else{
        reject('Error')
    }  

})


async function consumepromiseseven(){
    try{
        const response = await promiseSeven //with the help of try and catch we handle the error
        console.log(response);
    }
    catch(error){
        console.log('error')
    }

}
consumepromiseseven();