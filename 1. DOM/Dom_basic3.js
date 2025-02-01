//HERE WE LEARN ABOUT THE RELATION B/W DIFFERENT HTML TAGS

const parent = document.querySelector('.parent')
console.log(parent);                      //it return the parent class 
console.log(parent.children);            //it return the HTMLCollection of parent's children
console.log(parent.children[2].innerHTML);//it return the inner html of parent'2nd children
for(let i =0 ; i <parent.children.length; i++){
    console.log(parent.children[i].innerHTML); // with the help of loop it return the all children's inner Html
}                 
parent.children[1].style.color = "orange";
console.log(parent.firstElementChild);  //refer to first element of parent(child) return div of monday
console.log(parent.lastElementChild);   //refer to last element of parent(child) return div of thrusday

const dayone = document.querySelector('.day') //it store the value of first class of day
console.log(dayone);               
console.log(dayone.parentElement);     // it refer to parent element of dayone
console.log(dayone.nextElementSibling); //it refer to its just sibling


//NODES

console.log(parent.childNodes); //it return nodelist of (9) not 4 becuase javascript also make a tree to represent it also include the enter after the tag;

