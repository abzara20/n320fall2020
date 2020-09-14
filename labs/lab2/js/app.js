
//parent class
class instrument{

    constructor(loudness, family, verb){
        this.volume = loudness;
        this.family = family;
        this.verb = verb;
    }

    //function to play the instrument
    play () {
        console.log("the " + family + " "+ verb + " at " + loudness);
    }
}

class woodwind extends instrument{
    constructor() {
        super("a quiet volume","oboe","blew");
    }
}

class percussion extends instrument{
    constructor() {
        super("a roar","snare","thrashed")
    }
}

class string extends instrument{
    constructor() {
        super();
    }
}