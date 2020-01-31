// Function for printing an alert pop-up when "Yes" button from HTML is clicked.
function Start() {
    alert("The game has started.\nIt is your move!");
    clearGame(); // Function for clearing the game matrix and board every time when "Yes" button is clicked.
}

// Function for printing a question about quitting the game.
// If user clicks "OK" in alert pop-up, browser's tab closes.
function Close() {
    if (confirm("Are you sure you want to quit the game?")) {
        close(); // Doesn't work in Mozilla Firefox without some kind of script.
        clearGame(); // Function for clearing the game matrix and board if tab won't close (like in Mozilla Firefox case).
    }
}

// Game matrix for saving cells that were used during the game.
var GameMatrix = [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]];

// Function for user's moves. Function remembers all user's moves by inputting them into matrix.
// Depending on clicked cell, and if it's empty, function puts there a picture of an "X" sign (#1),
// after puts a number 1 to matrix (#2), meaning it was user's move and the cell is occupied,
// calls function for computer's move (#3) and in the end calls function for checking if there is any winners (#4).
function ChangeStartDot(clickedCell) {
    var userMove;
	if (clickedCell == "cell0_0" && GameMatrix[0][0] == 0) {
	    userMove = document.getElementById("cell0_0");  // #1
        userMove.src = "X-sign.png";                    // #1
        GameMatrix[0][0] = 1;                           // #2
        ComputerMove();                                 // #3
	} else if (clickedCell == "cell0_1" && GameMatrix[0][1] == 0) {
	    userMove = document.getElementById("cell0_1");  
        userMove.src = "X-sign.png";                    
        GameMatrix[0][1] = 1;
        ComputerMove();
	} else if (clickedCell == "cell0_2" && GameMatrix[0][2] == 0) {
	    userMove = document.getElementById("cell0_2");
        userMove.src = "X-sign.png";
        GameMatrix[0][2] = 1;
        ComputerMove();
	} else if (clickedCell == "cell1_0" && GameMatrix[1][0] == 0) {
	    userMove = document.getElementById("cell1_0");
        userMove.src = "X-sign.png";
        GameMatrix[1][0] = 1;
        ComputerMove();
	} else if (clickedCell == "cell1_1" && GameMatrix[1][1] == 0) {
	    userMove = document.getElementById("cell1_1");
        userMove.src = "X-sign.png";
        GameMatrix[1][1] = 1;
        ComputerMove();
	} else if (clickedCell == "cell1_2" && GameMatrix[1][2] == 0) {
	    userMove = document.getElementById("cell1_2");
        userMove.src = "X-sign.png";
        GameMatrix[1][2] = 1;
        ComputerMove();
	} else if (clickedCell == "cell2_0" && GameMatrix[2][0] == 0) {
	    userMove = document.getElementById("cell2_0");
        userMove.src = "X-sign.png";
        GameMatrix[2][0] = 1;
        ComputerMove();
	} else if (clickedCell == "cell2_1" && GameMatrix[2][1] == 0) {
	    userMove = document.getElementById("cell2_1");
        userMove.src = "X-sign.png";
        GameMatrix[2][1] = 1;
        ComputerMove();
	} else if (clickedCell == "cell2_2" && GameMatrix[2][2] == 0) {
	    userMove = document.getElementById("cell2_2");  
        userMove.src = "X-sign.png";
        GameMatrix[2][2] = 1;
        ComputerMove();
    }
    WinnerCheck();                                      // #4
}

// Function for computer's moves.
function ComputerMove() {
    var nextMove;

    // Defining variables for matrix's rows and columns.
    // Math.random function searches for a random place in matrix to put computer move there.
    var i = Math.floor(Math.random() * 3);
    var j = Math.floor(Math.random() * 3);

    // Loop searches for a random free place in matrix for up to 100 times if it wasn't found at the first time.
    var loopCheck = 0;
    while (GameMatrix[i][j] != 0 && loopCheck <= 100) {
        i = Math.floor(Math.random() * 3);
        j = Math.floor(Math.random() * 3);
        loopCheck = loopCheck + 1;
    }

    // If place in matrix equals 0 (place isn't taken by user or computer already),
    // by using previous Math.random function, there will be randomly putted a number 2 meaning that place in matrix is taken by computer move.
    if (GameMatrix[i][j] == 0) {
        GameMatrix[i][j] = 2;
        // When there's a randomly generated row and column by Math.random function,
        // they will be used to create the same variable that is used in HTML for cell places.
        var solidID = "cell" + i.toString() + "_" + j.toString();
        // When variable is created, function puts there a picture of an "O" sign.
        nextMove = document.getElementById(solidID);
        nextMove.src = "O-sign.png";
    }
    // Calling function for checking if there is any winners.
    WinnerCheck();
}

// Function for cheking if there is any winners in the game.
function WinnerCheck() {
    // When game ends and the matrix is clear (rows and columns are all 0), comes alert pop-up about starting game again.
    if (GameMatrix[0][0] == 0 && GameMatrix[0][1] == 0 && GameMatrix[0][2] == 0 &&
        GameMatrix[1][0] == 0 && GameMatrix[1][1] == 0 && GameMatrix[1][2] == 0 &&
        GameMatrix[2][0] == 0 && GameMatrix[2][1] == 0 && GameMatrix[2][2] == 0) {
        alert("You can try again!");
    // If user wins (if in matrix in the same row, column or diagonally is numbers 1) comes alert pop-up with congratulations
    // and after that game board (matrix and pictures) is reset to 0 so that new game can begin.
    } else if (GameMatrix[0][0] == 1 && GameMatrix[1][0] == 1 && GameMatrix[2][0] == 1) {
        alert("You have won. \nCongratulations!"); 
        clearGame();                                               
    } else if (GameMatrix[0][1] == 1 && GameMatrix[1][1] == 1 && GameMatrix[2][1] == 1) { 
        alert("You have won. \nCongratulations!");
        clearGame();
    } else if (GameMatrix[0][2] == 1 && GameMatrix[1][2] == 1 && GameMatrix[2][2] == 1) {
        alert("You have won. \nCongratulations!");
        clearGame();
    } else if (GameMatrix[0][0] == 1 && GameMatrix[0][1] == 1 && GameMatrix[0][2] == 1) {
        alert("You have won. \nCongratulations!");
        clearGame();
    } else if (GameMatrix[1][0] == 1 && GameMatrix[1][1] == 1 && GameMatrix[1][2] == 1) {
        alert("You have won. \nCongratulations!");
        clearGame();
    } else if (GameMatrix[2][0] == 1 && GameMatrix[2][1] == 1 && GameMatrix[2][2] == 1) {
        alert("You have won. \nCongratulations!");
        clearGame();
    } else if (GameMatrix[0][0] == 1 && GameMatrix[1][1] == 1 && GameMatrix[2][2] == 1) {
        alert("You have won. \nCongratulations!");
        clearGame();
    } else if (GameMatrix[0][2] == 1 && GameMatrix[1][1] == 1 && GameMatrix[2][0] == 1) {
        alert("You have won. \nCongratulations!");
        clearGame();
    // If computer wins (if in matrix in the same row, column or diagonally is numbers 2) comes alert pop-up with good luck wishes
    // and after that game board (matrix and pictures) is reset to 0 so that new game can begin.
    } else if (GameMatrix[0][0] == 2 && GameMatrix[1][0] == 2 && GameMatrix[2][0] == 2) {
        alert("Computer has won. \nGood luck next time!");
        clearGame();
    } else if (GameMatrix[0][1] == 2 && GameMatrix[1][1] == 2 && GameMatrix[2][1] == 2) {
        alert("Computer has won. \nGood luck next time!");
        clearGame();
    } else if (GameMatrix[0][2] == 2 && GameMatrix[1][2] == 2 && GameMatrix[2][2] == 2) {
        alert("Computer has won. \nGood luck next time!");
        clearGame();
    } else if (GameMatrix[0][0] == 2 && GameMatrix[0][1] == 2 && GameMatrix[0][2] == 2) {
        alert("Computer has won. \nGood luck next time!");
        clearGame();
    } else if (GameMatrix[1][0] == 2 && GameMatrix[1][1] == 2 && GameMatrix[1][2] == 2) {
        alert("Computer has won. \nGood luck next time!");
        clearGame();
    } else if (GameMatrix[2][0] == 2 && GameMatrix[2][1] == 2 && GameMatrix[2][2] == 2) {
        alert("Computer has won. \nGood luck next time!");
        clearGame();
    } else if (GameMatrix[0][0] == 2 && GameMatrix[1][1] == 2 && GameMatrix[2][2] == 2) {
        alert("Computer has won. \nGood luck next time!");
        clearGame();
    } else if (GameMatrix[0][2] == 2 && GameMatrix[1][1] == 2 && GameMatrix[2][0] == 2) {
        alert("Computer has won. \nGood luck next time!");
        clearGame();
    // If no one wins and it's a draw comes alert pop-up informing user about a draw
    // and after that game board (matrix and pictures) is reset to 0 so that new game can begin.
    } else if (GameMatrix[0][0] != 0 && GameMatrix[0][1] != 0 && GameMatrix[0][2] != 0 && 
                GameMatrix[1][0] != 0 && GameMatrix[1][1] != 0 && GameMatrix[1][2] != 0 &&
                GameMatrix[2][0] != 0 && GameMatrix[2][1] != 0 && GameMatrix[2][2] != 0) {
        alert("It is a draw!");
        clearGame();
    }
}

// Function for clearing the game matrix and board when the function is used.
function clearGame() {
    // Clears the matrix.
    GameMatrix = [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]];

    // Puts start picture (StartDot.png) in all game board cells.
    userMove = document.getElementById("cell0_0"); 
    userMove.src = "StartDot.png";

    userMove = document.getElementById("cell0_1");
    userMove.src = "StartDot.png";

    userMove = document.getElementById("cell0_2");
    userMove.src = "StartDot.png";

    userMove = document.getElementById("cell1_0");
    userMove.src = "StartDot.png";

    userMove = document.getElementById("cell1_1");
    userMove.src = "StartDot.png";

    userMove = document.getElementById("cell1_2");
    userMove.src = "StartDot.png";

    userMove = document.getElementById("cell2_0");
    userMove.src = "StartDot.png";

    userMove = document.getElementById("cell2_1");
    userMove.src = "StartDot.png";

    userMove = document.getElementById("cell2_2");
    userMove.src = "StartDot.png";
}