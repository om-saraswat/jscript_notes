const neweventadd = document.getElementById('add')
console.log(neweventadd)
if(neweventadd){
neweventadd.addEventListener('keydown', function(e) {
    if(e.key === "Enter" || e.code === "Enter"){console.log(neweventadd.value);
    addtodo(neweventadd.value);
    neweventadd.value = "";}
});
}

function addtodo(value){
    const list = document.querySelector('.list')
    //create a new list for new element

    const li = document.createElement('li')

    const img = document.createElement('img')    
    img.src="delete.png"

    img.setAttribute("id","immg");
    
    li.textContent = value;
    li.setAttribute("id","lii");

    list.appendChild(li);
    li.appendChild(img);
    
    
    img.addEventListener('click', function () {
        list.removeChild(li); // Remove the <li> when the image is clicked
    });

}

