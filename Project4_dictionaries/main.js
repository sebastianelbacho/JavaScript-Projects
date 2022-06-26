function my_Dictionary() {  //name of function in the text
    var Guitar = {    // type of variable
        kind: "6 strings guitar",
        type: "classic-acustic",
        color: "amber-yellow",
        wood: "ash",
        sound: "hard and clear",
        frets: "24",
    };
    delete Guitar.color;
    document.getElementById("dictionary").innerHTML = Guitar.wood; //pick element from source and from variable

}
