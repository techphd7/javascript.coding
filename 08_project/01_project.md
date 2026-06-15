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


