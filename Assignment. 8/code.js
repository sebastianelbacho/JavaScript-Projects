


function a_Few_Words() {
    let part_1 = "If You clicked  ";
    let part_2 = "here, ";
    let part_3 = "You know now  ";
    let part_4 = "I'm still learning JS ";
    let part_5 = "and felling good!"
    let whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}


function precisionMethod() {
    let A = 231.8909;
    document.getElementById("Here").innerHTML = A.toPrecision(3);
}


function sliceMethod() {
    let Sentence = "Water can flow or destroy. Be water, my friend.";
    let Section = Sentence.slice(10, 11);
    document.getElementById("Slice").innerHTML = Section;
}