var logo = document.querySelector('.container'); //The querySelector() method returns the first element that matches a CSS selector
var menu = document.querySelector('.menu');

logo.addEventListener('click', function () {  //method attaches an event handler to an element
    menu.classList.toggle('showmenu');

})


function myFunction() { //
    var sentence = "I am learning";  //concatenation...
    sentence += " and still need a lot of time to understand those things";  //concatenation
    document.getElementById("concatenate").innerHTML = sentence; // Getting an element with the specified id:

}
