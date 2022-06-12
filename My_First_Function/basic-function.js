function My_First_Function() {                  //Defining a function and namimg it 
    var str = "This text is green!";        //Defining a variable and giving a string value
    var result = str.fontcolor("green");    //Using  the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result; // Puttin the value of result into HTML element with "Green_Text" ID 
}
