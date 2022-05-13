let number = document.querySelector('.number');
let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let increase = document.querySelector('.increase');

let num = 0;

decrease.addEventListener('click', function() {
    num--;
    number.innerHTML = num;
    if (num < 0) {
        number.style.color = 'darkred';
    }
})

reset.addEventListener('click', function() {
    num = 0;
    number.innerHTML = num;
    number.style.color = 'inherit';
})

increase.addEventListener('click', function() {
    num++;
    number.innerHTML = num;
    if (num > 0) {
        number.style.color = 'darkgreen';
    }
})