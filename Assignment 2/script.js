var logo = document.querySelector('.container'); //The querySelector() method returns the first element that matches a CSS selector
var menu = document.querySelector('.menu');

logo.addEventListener('click', function () {
    menu.classList.toggle('showmenu');

})


function myFunction() {
    var sentence = "I am learning";
    sentence += " and still need a lot of time to understand those things";
    document.getElementById("concatenate").innerHTML = sentence;

}
