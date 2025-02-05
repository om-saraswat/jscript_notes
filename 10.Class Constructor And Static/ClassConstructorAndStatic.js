//<---Class Implementation--->

class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    upper(){
        console.log(`username is a ${this.username.toUpperCase()}`)
    }

    encrpt(){
        console.log(`pass is encrypt ${this.password}abcd`)
    }
}

const chai = new User("Om","Om@gamil.com","123")

chai.upper()
chai.encrpt()


//<---function--->

function usser(username,email,pass){
    this.username  = username
    this.email = email
    this.pass = pass;

    
    usser.prototype.uppe= function (){
        console.log(`username is a ${this.username.toUpperCase()}`)
    }

    usser.prototype.encrypt= function (){
        console.log(`pass is encrypt ${this.pass}abcd`)
    }
}

const tea = new usser("Om","Om@gamil.com","1243")

tea.uppe()
tea.encrypt()


//<--It shows class is suitable because we have not need to use prototype to intialize a new method-->

