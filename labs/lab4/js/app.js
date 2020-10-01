
//retrieve the squares for the tic tac toe grid and store into an array
let svgVar = document.getElementsByClassName("cls-2");
//for loop for every part of the array to add an event listener
for ( i = 0; i < svgVar.length; i++) {
//adding an event listener in order to add js 
svgVar[i].addEventListener("click", onCLick);
}

//function that triggers everytime a person clicks on a square
function onCLick(event){
    //accessing the css file and changing the color of the square
    event.target.style.fill = "blue" ;
}