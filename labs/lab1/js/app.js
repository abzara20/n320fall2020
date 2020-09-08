//Abril Zaragoza-Palos Ground Rain lab
//N320 Lab 1: Ground Rain
//9.7.2020

//class to create and move the raindrops
class raindrop {
    //constructor class
    constructor(xPos,yPos){
        this.X = xPos;
        this.Y = yPos;
        this.length = 15;
        this.width = 5;
        this.color = "(0%,0%,100%)";
 }
    //update class that moves the raindrop
    update(){
     ellipse(this.X, this.Y, this.width, this.length);
    }
}

class Ground {
    //constructor for the ground class
    constructor( xPos, yPos, height, width){
        this.x = xPos;
        this.y = yPos;
        this.height = height;
        this.width = width;
        this.color = 5;
    }
    
    //update function for creating and changing the color of the ground
    update(){
        fill('rgb(30%,10%,' + this.color + '%)');
        rect(this.x,this.y,this.height,this.width);
        
    }
}

//array to store the raindrops in
let rainArray = [];

let floor = new Ground(0,500,800,200);

function setup(){
    createCanvas(800,600);
    for (i=0; i<25;i++) {
        rainArray[i] = new raindrop(random(0,800), 15) 
    }
}

function draw(){
    background(117,133,142);
    noStroke();
    fill(255,255,255);
    for (i=0; i<25;i++) {
        rainArray[i].update()
    }

    floor.update();
}