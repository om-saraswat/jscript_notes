const Setusername = function (username){
    this.username = username;
}


const createuser = function(username,email){

    Setusername(username) //it call the function, after execution of that function it clear its execution context 
    this.email = email   // from the call stack with the memory of username,to prevent this we use ".call" and also 
                        //  use "this" to refer for which context it required. 

}

const Om = new createuser("Om","sharmaom27022004@gmail.com")
console.log(Om)

//<---this show only email not username because at line no.8--->


const petusername = function (psername){
    this.psername = psername;
}


const preateuser = function(psername,email){

    petusername.call(this, psername) //it call the function, after execution of that function it clear its execution context 
    this.email = email   // from the call stack with the memory of username,to prevent this we use ".call" and also 
                        //  use "this" to refer for which context it required. 

}

const doggy = new preateuser("Bruno","Bruno@gmail.com")
console.log(doggy)