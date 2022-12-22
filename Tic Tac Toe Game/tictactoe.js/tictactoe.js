// This variable keeps track of who's turn it is.
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions
let selectedSquares = [];


// This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
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
        if (activePlayer === 'X') {
            // if active player is anthoing other than 'X' change it to 'O'
            activePlayer = 'O';


            // if active player is anthing other then 'X'
        } else {
            // change the activePlayer to 'X'
            activePlayer = 'X';
        }

        // this function plays placemend sound.
        audio('./media/place.mp3');
        // this condition checks to see if it is computer turn.
        if (activePlayer === 'O') {
            // this function disables clicking for computer choice.
            disableClick();
            // This function waits 1 second before placing the image
            // and enabling click.
            setTimeout(function () {
                computersTurn(); // my vsc code shows me error here   <===
            }, 1000);
        }
        // Returning truwe is needed for our computersTurn() function to work.
        return true;
    }

    // This function results in a random squre being selected.
    function computersTurn() {
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
    //X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) {
        drawWinLine(50, 100, 558, 100);
    }
    //X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) {
        drawWinLine(50, 304, 558, 304);
    }
    //X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) {
        drawWinLine(50, 304, 558, 508);
    }
    // X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) {
        drawWinLine(100, 50, 100, 558);
    }
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) {
        drawWinLine(304, 50, 304, 558);
    }
    // X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) {
        drawWinLine(508, 50, 508, 508);
    }
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) {
        drawWinLine(100, 508, 510, 90);
    }
    // X 0, 4, 8 
    else if (arrayIncludes('0X', '4X', '8X')) {
        drawWinLine(100, 100, 520, 520);
    }
    // O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) {
        drawWinLine(50, 100, 558, 100);
    }
    // O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) {
        drawWinLine(50, 304, 558, 304);
    }
    // O 6, 7, 8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) {
        drawWinLine(50, 508, 508, 508);
    }
    //  O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) {
        drawWinLine(100, 50, 100, 558);
    }
    // O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) {
        drawWinLine(304, 50, 304, 558);
    }
    // O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) {
        drawWinLine(508, 50, 508, 558);
    }
    // O 6, 4, 2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) {
        drawWinLine(100, 508, 510, 90);
    }
    // O 0, 4, 8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) {
        drawWinLine(100, 100, 520, 520);
    }
    // This condition checks for tie. If non of the above conditions register
    // and 9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        // This function palys the tie game sound.
        Audio('./media/tie.mp3');
        // This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () {
            resetGame();
        }, 1000);
    }

    // This function checks if any array includes 3 strings.
    // It is used to check for each win condition.

    function arrayIncludes(squareA, squareB, squareC) {
        // The next 3 variables will be used to check for 3 in row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // id the 3 variables we pass are all included in oiur array true is
        // returned and our else if condition executes the drawWinLine function.
        if (a === true && b === true && c === true) {
            return true;
        }
    }

}

// THis function makes our body element temporaraily unclickable.
function disableClick() {
    // This makes our body unclickable.
    body.style.pointerEvents = 'none';
    // This makes our body clickable again after 1 second.
    setTimeout(function () {
        body.style.pointerEvents = 'auto';
    }, 1000);
}

// This function takes a strig parameter of the path you sey earlier for
// placement sound ('.media/place.mp3')
function audio(audioURL) {
    // We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    // Play method plays our audio sound.
    audio.play();
}

// This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // This line accesses our html canvas element.
    const c = canvas.getContext('2d');

    // This line indicates where the start od a lines z axis is.
    let x1 = coordX1,

        // This line indicates where the start of a lines y axis is.
        y1 = coordY1,
        // This line indicates where the end of a lines z axis is.
        x2 = coordX2,

        // This line indicates where the end os a lines x axis is.
        y2 = coordY2,

        // This variable stores temporary z axis data we update in our animation loop.
        x = x1,

        // This variable stores temporary yaxis data we update in our abimation loop.
        y = y1;


    // this function interacts with the canvas
    function animateLineDrawing() {
        // This variabler creates the loop for when the game ends it restarts.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // This method clears content from last loop itertion.
        c.clearRect(0, 0, 608, 608);
        // This method starts a new path 
        c.beginPath();

        // This method moves us to a starting point for our line.
        c.movesTo(x1, y1);

        // This method indicates the wnd point in our line.
        c.lineTo(x, y);

        // This method set the width of our line.
        c.strokeStyle = 'rgba(70, 255, 33, .8';

        // This method deaws everything we laid out above.
        c.stroke();

        // This condition checks if we've reached the endpoint.
        if (x1 <= x2 && y1 <= y2) {
            // This condition adds 10 to the previous end x point.
            if (y < x2) {
                y += 10;
            }
            // This condition adds 10 to the previous end y point.
            if (y < y2) {
                y += 10;
            }
            // This condition cancles our animation loop if reach the end points.
            if (x >= x2 && y >= y2) {
                cancelAnimationFrame(animationLoop);
            }

        }

        // This condition is similar to the one above.
        // It was necessary for the 6, 4, 2 win condition.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {
                x += 10;
            }
            if (y > y2) {
                y -= 10;
            }
            if (x >= x2 && y <= y2) {
                cancelAnimationFrame(animationLoop);
            }
        }

        // This function clears our canvas after our win line drawn.
        function clear() {
            // This line starts our animation loop.
            const animationLoop = requestAnimationFrame(clear);
            // This line stops our canvas.
            c.clearRect(0, 0, 608, 608);
            // This line stops our animation loop.
            cancelAnimationFrame(animationLoop);
        }

        // Thios line disallows clicking while the win sound is playing.
        disableClick();
        // This line plays the win sound.
        audio('./media/winGame.mp3');
        // This line calls our main animation loop.
        animateLineDrawing();
        // This line waits 1 second.
        // Then, clears canvas resets game, and allows clicking again.
        setTimeout(function () {
            clear();
            resetGame();
        }, 1000);


    }

}

// Thois function resets the game in a tie or a win.
function resetGame() {
    // This for loop iteretes through each HTML square element
    for (let i = 0; i < 9; i++) {
        // Thios variable gets the html element od i.
        let square = document.getElementById(String(i));
        // This removes our elements backgroundImage.
        square.style.backgroundImage = '';

    }

    // This resets our array so it is empty and we can start over.
    selectedSquares = [];
}
