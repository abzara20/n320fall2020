
let source = "https://abzara20.github.io/n320fall2020/";

let example = document.getElementById("test");
let clone = example.content.cloneNode(true);
clone.querySelector(".practice").setAttribute("src", source);
document.body.appendChild(clone);

class rainbow6 {
    constructor(operator, player){
        this.op = operator;
        this.user = player;
    }
    render(){
        return `
        <div> 
        The player ${this.user} has chosen to play as ${this.op} for this round
        <div>
        `
    }
}

let game = new rainbow6("Ash", "GamerGuy");
match = document.getElementById("example2");
match.innerHTML = game.render();
