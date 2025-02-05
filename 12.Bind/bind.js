class react{
    constructor(){
        this.library = "React"
        this.server = "https://localhost/3000"
    
    //document.querySelector('button').addEventListener('click',this.handleclick.) //this doesnot work because handleclick doesnot take the reference of server
    document.querySelector('button').addEventListener('click',this.handleclick.bind(this))
}
handleclick(){
    console.log(`buttonclick`)
    console.log(this.server)

}

}
const app = new react()