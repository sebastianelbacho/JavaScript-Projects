var today = new Date();
var hourNow = today.getHours();
var greetings;

if (hourNow < 12) {
    greetings = "Good Morning!";
} else if (hourNow > 12) {
    greetings = "Good Aftrnoon!";
} else if (hourNow > 18) {
    greetings = "Good Evening!";
} else {
    greetings = "Welcome!";
}

document.write("<h4>" + greetings + "</h4>");


function getArea(width, height) {
    var area = width * height;
    return area;
}

let wallSize = getArea(4, 7);
document.write(wallSize);
