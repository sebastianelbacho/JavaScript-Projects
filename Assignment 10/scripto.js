var names = window.prompt("Type Yourname here please...") //
while (names == "") {
    names = window.prompt("Type Yourname here please...")
}

alert("Thank You".toUpperCase())


window.setTimeout(function () {
    alert("You are here 20 seconds already, too long!".toUpperCase())
}, 20000)

// var scores = [24, 32,17];
// var arrayLenght = scores.length;

// var roundNumber = 0;
// var msg = '';
// var i;

// for (i = 0; i < arrayLenght; i++) {
//     roundNumber = (i + i);

//     msg += 'Runda ' + roundNumber + ' : ';
//     msg += scores[i] + '<br />';
// }

// document.getElementById('answer').innerHTML = msg;

var Instruments = ["Guitars", "Drums", "Piano"]
var Content = "";
var Y;

function forLoop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("ListOfInstruments").innerHTML = Content;
} 
