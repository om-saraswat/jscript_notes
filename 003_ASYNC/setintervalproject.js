const randomNum = function(){
    const HEX = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0;i<6;i++){
      color += HEX[Math.floor(Math.random()*16)];
    }
    return color;
  };
  let changecolor 
  function change(){
   changecolor = setInterval(hello,1000);
  }
  function hello(){const body = document.querySelector('body')
  
    body.style.backgroundColor = randomNum();}
    const body = document.querySelector('body')
    body.style.backgroundColor = randomNum();
  
  const start = document.querySelector('#start');
   const changeinloop = start.addEventListener('click',change)
  
  
   const stop = document.querySelector('#stop');
   stop.addEventListener('click',() =>{
      clearInterval(changecolor)
   }) 