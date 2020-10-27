class game{
    constructor(){
        this.playerTurn = 1;
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

                if (event.target.getAttribute("select") == 0) {

                    if (this.playerTurn % 2 == 0){
                        event.target.style.fill = "blue";
                        this.playerTurn = this.playerTurn + 1;
                    } else {
                        event.target.style.fill = "pink";
                        this.playerTurn ++;
                    }
                }  
            }, false);
        }
    }
}


let play = new game;
play.turn();