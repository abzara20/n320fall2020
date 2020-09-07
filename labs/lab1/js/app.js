//Abril Zaragoza-Palos Ground Rain lab
//N320 Lab 1: Ground Rain
//9.7.2020

//array to store the raindrops in
let rainArray = [];

//class to create and move the raindrops
class raindrop {
    //constructor class
    constructor(xPos,yPos){
        this.X = xPos;
        this.Y = yPos;
        this.length = 15;
        this.width = 25;
        this.color = "(0%,0%,100%)";
 }
    //update class that moves the raindrop
    update(){
    
    }
}

class ground {
    //constructor for the ground class
    constructor( xPos, yPos, height, width){
        this.x = xPos;
        this.y = yPos;
        this.height = height;
        this.width = width;
    }
}

function setup(){
    createCanvas(800,600);
}

function draw(){
    background(117,133,142);
}