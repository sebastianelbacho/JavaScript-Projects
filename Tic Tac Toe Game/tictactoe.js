// This variable keeps track of who's turn it is.
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions
let selectedSquares = [];


// This function is for placing an x or o in a square.
function placeXorO(squareNumber) {
    // This condition ensures a square hasn't be selected already.
    // The .some() method is used to check each lement of slectedSquare array.
    // see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // this variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        // this condition checks who's turn it is.
        if (activePlayer === 'X') {
            // if activePlayer is equal to 'X', the x.png is placed HTML
            select.style.backgroundImage = 'url("images/x.png")';
            // Active palyer may only be 'X' or 'O' so, if not 'X' it must be 'O'

        } else {
            // if activePlayer is equal to 'O', the o.png is placed in HTML .
            select.style.backgroundImage = 'url("images/o.png")';
        }

        // squareNumber and activePalyer are concatenated togheter and added to array
        selectedSquares.push(squareNumber + activePlayer);
        // this calls a function to check for any win conditions.
        checkWinConditions();
        // this condition is for changing the active player.
        if (actibePlayer === 'X') {
            // if active player is anthoing other than 'X'.


        } else {
            // change the activePlayer to 'X'
            activePlayer = 'X';
        }

        // this function plays placemend sound.
        Audio('./media.place.mp3');
        // this condition checks to see if it is computer turn.
        if (activePlayer === 'O') {
            // this function disables clicking for computer choice.
            disableClick();
            // This function waits 1 second before placing the image
            // and enabling click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        // Returning truwe is needed for our computersTurn() function to work.
        return true;
    }

    // This function results in a random squre being selected.
    function computerTurn() {
        // This boolean is needed for our while loop.
        let success = false;
        // This variable stores a random number 0-8
        let pickASquare;
        // This condition allowa our while loop to keep
        // trying if a square is selected already.
        while (!success) {
            // A randomn number between 0 and 8 is selecyted
            pickASquare = String(Math.floor(Math.random() * 9));
            // If the random number evaluates returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                // This line cals the function.
                placeXOrO(pickASquare);
                // This changes our boolean an ends the loop.
                success = true;
            };
        }
    }
}

//  this function parses the selected Squares array to search for win conditions.
// draw Win lINE FUNCTION IS CALLED TO DRAW LINE IF CONDITION IS MET.

function checkWinConditions() {
    //X 0,1, 2 condition.
    if (arrayIncludes('X0', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
    //X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
    //X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 304, 558, 508); }
    // X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
    // X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 508); }
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
    // X 0, 4, 8 
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }
    // O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
    // O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
    // O 6, 7, 8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 508, 508); }
    //  O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
    // O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
    // O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
    // O 6, 4, 2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
    // O 0, 4, 8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }
    // This condition checks for tie. If non of the above conditions register
    // and 9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        // This function palys the tie game sound.
        Audio('./media/tie.mp3');
        // This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 1000);
    }

    // This function checks if any array includes 3 strings.
    // It is used to check for each win condition.

    function arrayIncludes(squareA, squareB, squareC) {
        // The next 3 variables will be used to check for 3 in row.
        const a = selectedSquares(squareA);
        const b = selectedSquares(squareB);
        const c = selectedSquares(squareC);
        // id the 3 variables we pass are all included in oiur array true is
        // returned and our else if condition executes the drawWinLine function.
        if (a === true && b === true && c === true) { return true; }
    }

}

// THis function makes our body element temporaraily unclickable.
function disableClick() {
    // This makes our body unclickable.
    body.style.pointerEvents = 'none';
    // This makes our body clickable again after 1 second.
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

// This function takes a strig parameter of the path you sey earlier for
// placement sound ('.media/place.mp3')
function audio(audioURL) {
    // We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    // Play method plays our audio sound.
    audio.play();
}
