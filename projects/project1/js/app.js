


//small animation to make the tic tac toe board appear on load
let wrapper = document.getElementById("wrapper");
TweenMax.from(wrapper, {duration:2.5, alpha:0, y: 200});


//count for turns
let turnCount = 0;
//array to represent the game board, based on the svg rectangles
let boardArray = [0,0,0,0,0,0,0,0,0]

//id which wiil be used to display player one or two will win
let winID = 0;
//variable that will store the method of winning
let winMethod = "";


class game{
    constructor(){
        // this.scoreboard = new scoreBoard();
        //retrieve the squares for the tic tac toe grid and store into an array
        this.svgVar = document.getElementsByClassName("cls-2");
        this.win = false;
    }

    winner(){
        for( let i = 0; i < boardArray.length; i++) {
            //checks to see if the value has something other than 0
            if (boardArray[i] != 0) {

                //checks to see if a player has won already
                if (this.win == true){

                    // console.log("player " + winID + " won");
                    break;

                } else {

                    //checks for horizontal wins
                    if (i == 0 || i == 3 || i == 6){
                        if(boardArray[i] == boardArray[i+1] && boardArray[i] == boardArray[i+2]) {
                            // console.log('H win');

                            winMethod = "horizontal win";
                            winID = boardArray[i];
                            scoreboard.winnerDisplay();

                            this.win = true;

                        }
                    }
                    //checks for vertical wins
                    if (i == 0 || i == 1 || i == 2){
                        if(boardArray[i] == boardArray[i+3] && boardArray[i] == boardArray[i+6]) {
                            // console.log('V win');

                            winMethod = "vertical win";
                            winID = boardArray[i];
                            scoreboard.winnerDisplay();

                            this.win = true;
                        }
                    }
                    //checks for diagonal wins
                    if(i == 4){
                        if((boardArray[i] == boardArray[i-4] && boardArray[i] == boardArray[i+4]) || (boardArray[i] == boardArray[i-2] && boardArray[i] == boardArray[i+2]) ){
                            // console.log('D win');

                            winMethod = "diagonal win"
                            winID = boardArray[i];
                            scoreboard.winnerDisplay();

                            this.win = true;
                        }
                    }
                    //case for a tie
                }
            }
        }
    }
    //end of winner class
}

//player class, who would take turns making a move
class player extends game{
    constructor(name, symbol, playerNum){
        super();
        this.name = name;
        this.symbol = symbol;
        this.playerNum = playerNum;
        this.selected;
    }

    turn(){
        //for loop for every part of the array to add an event listener
        for (let i = 0; i < this.svgVar.length; i++) {   
            //adding an event listener in order to add js 
            this.svgVar[i].addEventListener("click", function(event){

                //gets the attribute for selected square
                this.selected = event.target.getAttribute('select');

                //checks to see if the space is unselected
                if (this.selected == 0){
                    //if the turn is even, player one makes a move
                    if (turnCount % 2 == 0){
                        event.target.style.fill = "#77e6d3";
                        turnCount++;
                        boardArray[i] = 1;
                        console.log('player 1 ' + this.selected);
                        //changes the selected space from 0
                        event.target.setAttribute('select', 1);

                        //calls the winner function to check if there is a possible winner
                        game.prototype.winner();
                    } 
                    //if the turn is odd, player two makes a move
                    else {
                        event.target.style.fill = "#f7bed3";
                        turnCount++;
                        boardArray[i] = 2;
                        console.log('player 2 ' + this.selected);

                        //changes the selected space from 0
                        event.target.setAttribute('select', 1);
                        //calls the winner function to check if there is a possible winner
                        game.prototype.winner();
                    };
                } else {
                    console.log("no");
                }
                
            });
        }
    }
}

class scoreBoard{

    constructor () {
        this.score = document.getElementById('scoreboard');
    }

    //player one and two, and the respective colors
    //highlight player based on turn count
    display(){
        
    }

    //display when there is a winner
    winnerDisplay(){

        // console.log(winMethod + " "+ winID);
        if (winID == 1){
            // console.log('playerOne')
            this.score.classList.add('playerOne');
        } 
        else if (winID == 2) {
            
        }
        this.score.innerHTML = "Player " + winID + " won by " + winMethod;
    }
}

let scoreboard = new scoreBoard();
scoreboard.display();

let play = new player;
play.turn();
