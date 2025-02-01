const form = document.querySelector('form');

form.addEventListener('submit',function (e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  
  if(height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please enter a valid height ${height}`
  }
  else if(weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please enter a valid height ${weight}`
  }
  else{
       const bmi = (weight / ((height*height)/10000)).toFixed(3);
       if(bmi<18.6){
       result.innerHTML = `<span>Your wieght is under weight${bmi}</span>`
       }
       
       else if(bmi<24.9&&bmi>18.6){
       result.innerHTML = `<span>Your wieght is in normal range${bmi}</span>`
       }
  
  else if(bmi>24.9){
  result.innerHTML = `<span>Your wieght is over weight${bmi}</span>`
  }
}


});