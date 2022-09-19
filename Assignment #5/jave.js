function not_Function() {
    document.getElementById("Not").innerHTML = !(5 < 10); // this function with NOT operator checks whether or not something is true.  
}



function equal_Function() {
    document.getElementById("equal").innerHTML = (12 == 12); //equal function comprasion two numbers

}

function tripleFunction() {
    x = 102;
    y = 10;
    document.getElementById("triple").innerHTML = (x === y); // a three character comparison operator checks type and value


}

function greaterFunction() {
    document.getElementById("greater").innerHTML = (1345 > 478);
}

function andFunction() {
    document.getElementById("and").innerHTML = (11 > 9 && 9 > 7); //Logical operator "and" chcecks two equations  
}

function or_Function() {
    document.getElementById("or").innerHTML = (102 > 101 || 101 > 102); //Logical operator "or" checks two equations left and right. 

}
