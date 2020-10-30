


//small animation to make the tic tac toe board appear on load
let wrapper = document.getElementById("wrapper");
TweenMax.from(wrapper, {duration:2.5, alpha:0, y: 200});

//count for turns
turnCount = 0;
//id which wiil be used to display player one or two will win
winID = 0;
//array to represent the game board, based on the svg rectangles
boardArray = [0,0,0,0,0,0,0,0,0]

class game{
    constructor(){
        
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
                    winID = boardArray[i];
                    console.log("player " + winID + " won");
                    break;
                } else {

                    //checks for horizontal wins
                    if (i == 0 || i == 3 || i == 6){
                        if(boardArray[i] == boardArray[i+1] && boardArray[i] == boardArray[i+2]) {
                            console.log('H win');
                            this.win = true;
                        }
                    }
                    //checks for vertical wins
                    if (i == 0 || i == 1 || i == 2){
                        if(boardArray[i] == boardArray[i+3] && boardArray[i] == boardArray[i+6]) {
                            console.log('V win');
                            this.win = true;
                        }
                    }
                    //checks for diagonal wins
                    if(i == 4){
                        if((boardArray[i] == boardArray[i-4] && boardArray[i] == boardArray[i+ 4]) || (boardArray[i] == boardArray[i-2] && boardArray[i] == boardArray[i+2]) ){
                            console.log('D win');
                            this.win = true;
                        }
                    }
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
    }

    turn(){
        //for loop for every part of the array to add an event listener
        for (let i = 0; i < this.svgVar.length; i++) {   
            //adding an event listener in order to add js 
            this.svgVar[i].addEventListener("click", function(event){

                //if the turn is even, player one makes a move
                if (turnCount % 2 == 0){
                    event.target.style.fill = "#77e6d3";
                    turnCount++;
                    boardArray[i] = 1;
                    console.log(boardArray[i]);

                    //calls the winner function to check if there is a possible winner
                    game.prototype.winner();
                } 
                //if the turn is odd, player two makes a move
                else {
                    event.target.style.fill = "#f7bed3";
                    turnCount++;
                    boardArray[i] = 2;
                    console.log(boardArray[i]);

                    //calls the winner function to check if there is a possible winner
                    game.prototype.winner();
                };
            });
        }
    }
}


let play = new player;
play.turn();
