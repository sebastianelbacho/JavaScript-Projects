var today = new Date();    // variable 
var hourNow = today.getHours();   // variablem takes the exact hour
var greetings;     

if (hourNow < 12) {     // the variable display good morning info before 12 o'clock
    greetings = "Good Morning!";
} else if (hourNow > 12) {      // the variable display good afernoon info after 12 o'clock
    greetings = "Good Aftrnoon!";  
} else if (hourNow > 18) {     // the variable dispaly good evening after 18 o'clock
    greetings = "Good Evening!";
} else {
    greetings = "Welcome!";    // 
}

document.write("<h4>" + greetings + "</h4>"); //the program is attached under <h4> word


function getArea(width, height) {   //Local function
    var area = width * height;
    return area;
}

let wallSize = getArea(4, 7);  //global function
document.write(wallSize);


console.error("");
