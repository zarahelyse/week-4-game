$( document ).ready(function() {
    console.log( "ready!" );
});

var targetNumber = getRandomInt;







function getRandomInt(min, max) {
    min = Math.ceil(100);
    max = Math.floor(120);
    return Math.floor(Math.random() * (max - min)) + min;
    console.log= getRandomInt;
}