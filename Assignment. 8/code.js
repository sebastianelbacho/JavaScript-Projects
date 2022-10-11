


function a_Few_Words() {               //This function glue togheter single words.
    let part_1 = "If You clicked  ";
    let part_2 = "here, ";
    let part_3 = "You know now  ";
    let part_4 = "I'm still learning JS ";
    let part_5 = "and felling good!"
    let whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}


function precisionMethod() {    // this function round up the number.
    let A = 231.8909;
    document.getElementById("Here").innerHTML = A.toPrecision(3);
}


function sliceMethod() {          //this function its takes out "white spce" and letter "f" from the sentence.
    let Sentence = "Water can flow or destroy. Be water, my friend.";
    let Section = Sentence.slice(10, 11);
    document.getElementById("Slice").innerHTML = Section;
}


function string_Method() {   //This function displays the integer as a string
    let B = 102;
    document.getElementById("Numbers_to_string").innerHTML = B.toString();
}
