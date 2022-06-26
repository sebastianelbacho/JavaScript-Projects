function my_Dictionary() {
    var Guitar = {
        kind: "6 strings guitar",
        type: "classic-acustic",
        color: "amber-yellow",
        wood: "ash",
        sound: "hard and clear",
        frets: "24",
    }
    document.getElementById("dictionary").innerHTML = Guitar.color;
}
