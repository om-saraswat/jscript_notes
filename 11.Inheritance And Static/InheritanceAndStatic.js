class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} is active`)
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username)        //it doesnot require .call and this to take the current execution reference
        this.email = email
        this.password = password
    }
    addcourse(){
        console.log(`this course is add by ${this.username}`)
    }
}

const Om = new teacher("om","om@fb.com","!234") 
Om.logMe()
Om.addcourse()

const Rohan = new user("rohan","rohan@fb.com","!234")
Rohan.logMe()     
//Rohan.addcourse() because user does not inherit the property of teacher but teacher inherit the property of user

console.log(Om  instanceof teacher)  // TRUE
console.log(Om === Rohan) //false
console.log(teacher instanceof user)  //FALSE
console.log(user instanceof teacher)  //false
console.log(Rohan instanceof teacher)  //false
console.log(Rohan instanceof user)  //true

