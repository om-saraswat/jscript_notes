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
    
    const li = document.createElement('li')

    const img = document.createElement('img')    
    img.src="delete.png"

    img.setAttribute("id","immg");
    
    li.textContent = value;
    li.setAttribute("id","lii");

    list.appendChild(li);
    li.appendChild(img);
    
    
    img.addEventListener('click', function () {
        list.removeChild(li); 
    });

}

const searchBar = document.getElementById('search_b');

searchBar.addEventListener('input', function () {
    let filter = searchBar.value.toLowerCase();
    let items = document.querySelectorAll('.list li'); 

    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        if (text.includes(filter)) {                        //include function check the filter contain the substring or not.   
            item.style.display = ''; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    });
});





