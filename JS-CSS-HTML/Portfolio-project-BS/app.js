let buttons = document.querySelectorAll('.btn')

function changeBackground (){
    buttons.style.backgroundColor = 'blue';
}

buttons.onmouseover = changeBackground;

console.log('Hello World')