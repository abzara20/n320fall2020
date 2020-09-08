//Abril Zaragoza-Palos Ground Rain lab
//N320 Lab 1: Ground Rain
//9.7.2020

//class to create and move the raindrops
class raindrop {
    //constructor class
    constructor(xPos,yPos){
        this.x = xPos;
        this.y = yPos;
        this.length = 15;
        this.width = 5;
        this.color = "(0%,0%,100%)";
        this.speed = random(1,4);
 }
    //update class that moves the raindrop
    update(){
     ellipse(this.x, this.y, this.width, this.length);
    
     this.y = this.y + this.speed

     if (this.y >= 500){
         this.y = 0;
         hitCount = hitCount + 1;
     }
     return hitCount
    }
}

class Ground {
    //constructor for the ground class
    constructor( xPos, yPos, height, width, color){
        this.x = xPos;
        this.y = yPos;
        this.height = height;
        this.width = width;
        this.color = color;
    }
    
    //update function for creating and changing the color of the ground
    update(){

        if (hitCount>=10 && hitCount % 10 == 0){
            this.color = this.color + 1;
            console.log(this.color)
        }

        fill('rgb(30%,10%,' + this.color + '%)');
        rect(this.x,this.y,this.height,this.width);
    }
}

//array to store the raindrops in
let rainArray = [];
let hitCount = 0;
let blueVal = 5;
let floor = new Ground(0,500,800,200, blueVal);

function setup(){
    createCanvas(800,600);
    for (i=0; i<25;i++) {
        rainArray[i] = new raindrop(random(0,800), 0) 
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