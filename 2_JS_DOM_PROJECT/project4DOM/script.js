const randomNum = parseInt((Math.random() * 100) + 1);
console.log(randomNum);
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses')
const remaning = document.querySelector('.lastResult')
const loworhi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevguess = []
let numguess = 1;

let playgames = true;

if(playgames){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validate(guess);
  });
}

function validate(guess){
  if(isNaN(guess)){
    alert('enter a valid number')
  }
  else if(guess < 1){
    alert('enter the number more than 1')
  }
  else if(guess>100){
    alert('enter the number below 101')
  }
  prevguess.push(guess);
  if(numguess === 11){
    displayguess(guess)
    displayMessage(`game is over random number is ${randomNum}`)
    endgame()
  }
  else{
    displayguess(guess)
    check(guess)
  }
}

function check(guess){
  if(guess === randomNum){
    displayMessage('you guessed it right')
    endgame();
  }
  else if(randomNum<guess){
    displayMessage('your guess is too low')
  }
  else if(randomNum>guess){
    displayMessage('your guess is too high')
  }
}

function displayguess(guess){
  userinput.value = '';
  guessslot.innerHTML += `${guess} `
  numguess++;
  remaning.innerHTML = `${11-numguess}`
}
function displayMessage(message){
  loworhi.innerHTML = `<h2>${message}</h2>`
}
function endgame(){
 userinput.value = ''
 userinput.setAttribute('disabled' , '')
 p.classList.add('button')
 p.innerHTML = `<h2 id = newgame>start new game</h2>`
 startover.appendChild(p);
 playgames = false;
 newgame();
}
function newgame(){
 const newbutton =  document.querySelector('#newgame');
 newbutton.addEventListener('click',function(e){
  const randomNum = parseInt((Math.random() * 100) + 1);
  let prevguess = []
  numguess = 1;
  guessslot.innerHTML = ''
  remaning.innerHTML = `${11-numguess}`
  userinput.removeAttribute('disabled' , '')
  startover.removeChild(p);

  playgames = true
 })
}
