//CREATING A NEW ELEMENT
//In this method we have to traverse the tree till end if we have multipl
//call then it is not optimized way to do that.

function addlanguage(langName){
    const li = document.createElement('li');  //create element for store the new value
    li.innerHTML = `${langName}`;             //insert the value in th created element but this method is not optimized 
    document.querySelector('.language').appendChild(li); //put the element in the class(language)
}
addlanguage("python");
addlanguage("django");

//CREATING A ELEMENT BY OPTIMIZED WAY

function addoptilang(langName){
    const li = document.createElement('li')    //create element for store
    li.appendChild(document.createTextNode(langName)) //insert the value in created element
    document.querySelector('.language').appendChild(li) //put the new element or create element in class(language)
}

addoptilang('typescript');


//EDIT A ELEMENT

const secondlang = document.querySelector("li:nth-child(2)")
secondlang.outerHTML = '<li>c++</li>'     
const editli = document.createElement('li')
editli.textContent = "jai"
secondlang.replaceWith(editli)  //replace the element from another
 

//REMOVE ELEMENT 

const removelang = document.querySelector("li:first-child")
 removelang.remove()   //remove the element in the web page
