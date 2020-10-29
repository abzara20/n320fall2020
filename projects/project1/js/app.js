
let wrapper = document.getElementById("wrapper");
TweenMax.from(wrapper, {duration:2.5, alpha:0, y: 200});

class game{
    constructor(){
        this.playerTurn = 1;
        this.playerColor = "blue";
        //retrieve the squares for the tic tac toe grid and store into an array
        this.svgVar = document.getElementsByClassName("cls-2");
        this.boardArray = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
    }
    turn(){
        //for loop for every part of the array to add an event listener
        for (let i = 0; i < this.svgVar.length; i++) {   
            //adding an event listener in order to add js 
            this.svgVar[i].addEventListener("click", function(event){
                if (this.playerTurn = 1){
                    event.target.style.fill = "blue";
                }
                
            });
        }
    }
    effect(){
    }
}


let play = new game;
play.turn();