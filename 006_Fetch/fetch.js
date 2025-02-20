const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b25c732cfbmsh03bf07be148faaep15c190jsn193869d78e39',
		'x-rapidapi-host': 'quotes15.p.rapidapi.com'
	}
};


fetch(url,options).then(response => response.json()).then(data =>{
    console.log(data.id);
}).catch()


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task 2')
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log('async  2 resolve')
// })

const myPromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 2000);
});

myPromise
    .then(result => console.log(result))  // If resolved
    .catch(error => console.log(error));  // If rejected
