ticTacToe will ask first for 1 or 2 player mode
-if 1 player ask player name- choose x or o
If 2 player ask player 1 and player 2 names then play until game is done and have a button to reset game
(button only visible once game complete?)
Each click, we need to check to make sure nothing's in the box previously (no overwriting letters), check for a win, and check for a draw.
-worked on trying to get 1 player mode but settled for 2 player
one issue I'm having is after 1 player wins it is possible to keep playing if there's open squares, and so "player 1 and player 2 can potentially win in the same game" which gives some interesting messages, and each character each player plays after "winning" produces a winning message. Debugging this has me thinking about how to finalize the gameState after 1 player has won but there are still empty cells that look like they could be clicked;
for now my solution to that issue is to trust the players to enjoy the game and use the reset button responsibly, immediately after satisfying the winning condition
