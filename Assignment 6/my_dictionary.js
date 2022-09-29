



function myFunction() {
    let age, perfect;
    age = document.getElementById("age").value;
    perfect = (age < 8) ? "Always good" : "Perfect age";
    document.getElementById("demo").innerHTML = perfect + " ,great!";
}


function Guitar(Make, Model, Year, Color) {
    this.Guitar_Make = Make;
    this.Guitar_Model = Model;
    this.Guitar_Year = Year;
    this.Guitar_Color = Color;
}

var Seba = new Guitar("Gretsch", "Falcon", 2018, "White");
var John = new Guitar("Ibanez", "7-string- RGIXL-BKF", 2020, "Balck");
var Joseph = new Guitar("Fender", "Acustic", 2013, "Brown");
var Richard = new Guitar("Gibson", "Les Paul", 1995, "Heritage Cherry Sunburst");
function myFunction() {
    document.getElementById("Guitars").innerHTML =
        "Richard plays on a " + Richard.Guitar_Color + "-colored " + Richard.Guitar_Model +
        " manufactured in " + Richard.Guitar_Year;
}
