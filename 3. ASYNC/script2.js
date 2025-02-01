//<---SETINTERVAL--->
let n 
document.querySelector('#start').addEventListener('click',()=>{ 
     n = setInterval(function(){
    console.log('hitesh',Date.now());
 },1000,)
})
 
 document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(n)
 }) 


const om = "topa"
 