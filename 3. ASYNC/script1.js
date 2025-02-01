//<---SETTIMEOUT FUNCTION--->

setTimeout(function(){
    console.log("om saraswat")    //it is the setTimeout which help to execute a function after timeout
},2000)

// settimeout need a handler(it is function ) and timeout.


 const sayhitesh = function(){
     console.log("om saraswat") }

setTimeout(sayhitesh, 20000);

const changetext  = function(){
    document.querySelector('h1').innerHTML = "om saraswat"
}
const changeme = setTimeout(changetext,2000)

//<---CLEARTIMEOUT--->

document.querySelector('#stop').addEventListener('click' , () => {
    clearTimeout(changeme)
    console.log("stopped")
})




