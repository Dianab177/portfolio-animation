/*function alerta(mensage) {
    console.log(mensage)
}
alerta("Hola a todos");

function addOne(number) {
    return number + 1;
}
let newNumber = addOne(5);
alerta(newNumber);*/

let emptyElement= document.querySelector('.about .empty');
let titleElement= document.querySelector('.about .title');
let figureElement= document.querySelectorAll('.service figure');



window.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
    emptyElement.style.flexBasis = event.clientX + 'px';
    titleElement.style.flexBasis = event.clientX / 2 + 'px';

    figureElement.forEach( function (element) {
        element.style.flexBasis = (window.innerWidth - event.clientX) + 'px';
    });
}