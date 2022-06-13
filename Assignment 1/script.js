window.alert("Welcome! I'm still learning so, please understanding me :)"); //shows the text in a window

document.getElementById("window").addEventListener("click", function () { // Alert "Hello Visito" when the user clicks on an element
    alert("Hello Visitor!"); // display the text window.alert
});



var logo = document.querySelector('.container'); //The querySelector() method returns the first element that matches a CSS selector

logo.addEventListener('click', function () {
    menu.classList.toggle('showmenu');

})

let text = "and all mankind is on one sea";
var result = text.fontcolor("yellow");
document.getElementById("yellow").innerHTML = result;

function myFunction() { // taking the document from myFunction in HTML and open in a new window text....
    document.write("\"Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.\"" + "-Bruce Lee");
} 
