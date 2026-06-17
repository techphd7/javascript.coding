# Project related to DOM


## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution code

##01_project ->color change 

```javascript
console.log("prabhanshu")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    let colorName = e.target.id;
    switch (colorName) {
      case 'blue':
        body.style.backgroundColor = colorName;
      case 'yellow':
        body.style.backgroundColor =colorName;
      case 'grey':
        body.style.backgroundColor = colorName;
      case 'white':
        body.style.backgroundColor = colorName;
      case 'green':
        body.style.backgroundColor = colorName;
      case 'red':
        body.style.backgroundColor = colorName;
    }
  });
});
```
##02_project->BIM calculator
```javascript

const form = document.querySelector('form');
//this usecase will give you empty value  so it will inside form
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  //checks
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please enter a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please enter a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    
  results.innerHTML = `<span>BMI : ${bmi}</span>`;
  

  if (bmi < 18.6) {
    results.innerHTML += `you are under weight`;
  } else if (24.9 < bmi && bmi > 18.6) {
    results.innerHTML += `you are in normal Range`;
  } else {
    results.innerHTML += `you are over weight `;
  }
}
});
```
#project3-digital clock
```javascript
const clock=document.getElementById('clock')
//const clock=document.querySelector('#clock')


setInterval(function(){
  let date=new Date()
  //console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();
},1000)
```
#project4-random guess
```javascript
let randomNumber = Math.round(Math.random() * 100 + 1);
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //validation(1-100)
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a valid number, more than 1');
  } else if (guess > 100) {
    alert('please enter a valid number, less than 100');
  } else {
    previousGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over 😥  ,Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }

  function checkGuess(guess) {
    //check value is equal or not
    if (guess === randomNumber) {
      displayMessage(`✨Won, you guessed it right 🎉🎉🎉 `);
    } else if (guess < randomNumber) {
      displayMessage(`your guessed number is too low 😪`);
    } else {
      displayMessage(`your guessed number is too high 😪`);
    }
  }
}

function displayGuess(guess) {
  //array of previous guess
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remainingGuesses.innerHTML = `${12 - numGuess}`;
}

function displayMessage(message) {
  //message display
  lowHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //end game
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start Game</h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();
  
}

function newGame() {
  //restart game
  const newGame=document.querySelector('#newGame')
  newGame.addEventListener('click',function(e){
    randomNumber = Math.round(Math.random() * 100 + 1);
    previousGuess=[];
    numGuess=1
    guessSlot.innerHTML=''
    remainingGuesses.innerHTML=`${12-numGuess}`;
    userInput.removeAttribute('disabled','')
    startOver.removeChild(p)

    playGame=true

  });
}

```
#project5-key pressed
``` javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `<div class='color'><table>
<tr>
  <th>Key</th>
  <th>keycode</th>
  <th>code</th>
</tr>
<tr>
  <td>${e.key===" "?"Space":e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
</tr>

</table>
</div>`;
});

```
#project6-background color change every second
``` javascript

function randomColor(){
  const hex=Math.floor(Math.random() *1666216)+1;
  return "#"+hex;
}
let color;
 const start=document.querySelector("#start").addEventListener("click",function(){
   if(!color){
     color=setInterval(function(){
       document.body.style.backgroundColor=randomColor();
       console.log("color")
     },1000)
     
   }

 });

 const stop=document.querySelector("#stop").addEventListener("click",function(){
   clearInterval(color);
   color=null;
   console.log("stopped");
 });
```
#project7 
```javascript


