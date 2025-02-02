const api = 'https://api.github.com/users/hiteshchoudhary'

const xhr = new XMLHttpRequest();
let avat;
xhr.open('GET',api);

xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        console.log(typeof data);
        console.log(data.followers);
        avat = data.avatar_url;
        
        let card = document.createElement('div')
        
        card.style.backgroundColor = '#a8d8ea'
        card.style.display = 'flex'
        card.style.flexDirection = 'column'
        card.style.justifyContent = 'center'
        card.style.alignItems = 'center'
        card.style.borderRadius = '20px'
        card.style.padding = '20px'
        document.body.appendChild(card)
        
        let img = document.createElement('img')
        img.src = avat
        // Styling the image directly in JS
        img.style.width = '200px'
        img.style.height = '235px'
        img.style.borderRadius = '10px'
        img.style.objectFit = 'cover'
        card.appendChild(img)


        let h2 = document.createElement('h2')
        h2.innerHTML = "Hitesh chaudhary"
        // Styling the h2 directly in JS
        h2.style.color = '#212121'
        h2.style.marginTop = '20px'
        h2.style.fontSize = '24px'
        card.appendChild(h2)

        
    }
}
xhr.send();
