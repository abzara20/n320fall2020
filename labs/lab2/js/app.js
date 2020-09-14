
//parent class
class instrument{

    constructor(loudness, family, verb){
        this.volume = loudness;
        this.family = family;
        this.verb = verb;
    }

    //function to play the instrument
    play () {
        console.log("the " + this.family + " " + this.verb + " at " + this.volume);
    }
}

class woodwind extends instrument{
    constructor() {
        super("a quiet volume","oboe","performed");
    }
}

class percussion extends instrument{
    constructor() {
        super("a roar","snare","thrashed");
    }
}

class string extends instrument{
    constructor() {
        super("an intense volume","bass","plucked");
    }
}

//variable to insert the instruments into an array
let symphony = [];
// creating new instances for the child classes
symphony[0] = new woodwind;
symphony[1] = new percussion;
symphony[2] = new string;

// forEach loop to go through and play each instrument in the array
symphony.forEach((sound) => {
    sound.play();
});