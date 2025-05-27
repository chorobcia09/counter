
var numberElement = document.querySelector(".counter-header");
var number = 0;

function adding() {
    number+= 1;
    numberElement.innerHTML = number
}

function odding() {
    number-= 1;
    numberElement.innerHTML = number
}

function res() {
    number = 0;
    numberElement.innerHTML = number;
} 

document.addEventListener('keydown', function(event) {
    if (event.key === '+') adding();
    if (event.key === '-') odding();
    if (event.key === 'r') res();
});


