document.getElementById('title')
document.getElementById('title').id //return the value of id(title)
document.getElementById('title').class //doesnot give the value of class
document.getElementById('title').className //it gives tha name of class. this difference know after sometime.

//We can also ask attributes by this like

document.getElementById('title').getAttribute('id') //return the value of id
document.getElementById('id').getAttribute('class') //it gives the value of class

/* USE STYLE IN THIS */

const title = document.getElementById('title') // title store this function

title.style.backgroundColor = 'green'
title.style.borderRadius = "15px"

//in both we change the styling of id = title

//NOW WE LEARN HOW TO ADD THE CONTENT

title.innerHTML //it shows all the html text
title.innerText //it only shows the visible thing present in web page.
title.textContent //it shows all the things or text present in that attribute.

//QUERYSELECTOR AND QUERYSELECTORALL

document.querySelector('h1') //find the first h1 tag in web page.
document.querySelectorAll('h2') //it create the Nodelist of all h2 tag present in web page.
document.querySelector('input[type = "password"]') //also select the input tag with their type.

//IN QUERYSELECTORALL for doing operation we work like an array but not an array fully.

const listi = document.querySelectorAll(li) //we select all the list present in a ul it give a node list.

//operation
listi.forEach(function (l){
    l.style.color = 'green'
})                         //here we change the color of all list with help of loop

//HTMLCOLLECTION
const hll = document.getElementsByClassName('list-items') //it gives HTMLCOLLECTION 

//HTMLCOLLECTION DOESNOT HAVE ENOUGH FUNCTION WHICH WORK LIKE AN ARRAY TO SOLVE THIS PROBLEM FIRST WE CONVERT THE HTMLCOLLECTION TO AN ARRAY

const newn = Array.from(hll)
neww.forEach(function (l){
    l.style.color = 'orange';
})

