const button = document.querySelector('button');
const pl = document.querySelector('.second');
let start = document.querySelector('h2')

const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b25c732cfbmsh03bf07be148faaep15c190jsn193869d78e39',
		'x-rapidapi-host': 'quotes15.p.rapidapi.com'
	}
};


button.addEventListener('click',(event)=>{
    let fetchdata ;
    fetch(url,options).then(response => response.json()).then(data => {fetchdata = data}).catch(Error =>{
    console.log('error',Error);
    })
        pl.innerHTML = "";
        const h2 = document.createElement('h3');
        const h3 = document.createElement('h4');
        
        pl.appendChild(h2); 
        pl.appendChild(h3)
        h2.textContent = `Loading.....`;   
        setTimeout(()=>{
    
        if(fetchdata){
            h2.textContent = `"${fetchdata.content}"`;
            h3.textContent = `Qouted by : ${fetchdata.originator.name}`
        }
        else{
            start.value = "data not come yet"
        }
    },2000);
    

})