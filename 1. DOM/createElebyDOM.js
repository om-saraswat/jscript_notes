const div = document.createElement('div');
console.log(div);
div.className = "main";
div.id = Math.round(Math.random()*10+1);
div.setAttribute("title","generated h1");
div.style.backgroundColor="orange";
div.style.padding = "12px";
//div.innerHTML = "Om Saraswat" //it take the value and override the value

const addtext = document.createTextNode("Om saraswat")
div.appendChild(addtext)

document.body.appendChild(div)
