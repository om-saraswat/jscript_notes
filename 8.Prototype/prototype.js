
let hero = ['hulk','superman']

let heropower = {
    hulk : "anger",
    superman : "alien",

    getsupermanpower: function(){
        console.log(`Superman power is ${this.superman}`)
    }
}

Object.prototype.inherity = function(){
    console.log(`inherit in this`)
}

heropower.inherity(); // 
hero.inherity();    //inherity method or function can be used by all array, function, string


let user = "Om      "
let anotheruser = "Rohan"


String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)
}

user.truelength();
anotheruser.truelength()
// hero.truelength()  this doesnot work because we intiatalize the prototype in string not in array that's why but if we intitialize this method in object then it will work because object is on herarchiy



//<---Inheritance--->

//<---Old Syntax--->

const usser = {
    name : "Om",
    Email : "sharmaom27022004@gmail.com"
}
const teacher = {
    makeVider : true
}
const teachersupport = {
    isAvailable : false
}
const TAsuppo = {
    makeassign :  "JS-ASSIGN",
    fulltime : true,
    __proto__: teachersupport // this inherit the property of teachersupport object 
}
teacher.__proto__=usser //this is also a way to inherit the property of somebody

console.log(teacher.name)  //print Om
console.log(TAsuppo.isAvailable) //show false


//<---Modern Syntax--->

Object.setPrototypeOf(teachersupport,teacher);