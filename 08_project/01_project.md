# Project related to DOM


## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution code

##01_project

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
