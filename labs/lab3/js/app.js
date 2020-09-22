// let candyOne = {
//     name = "Twix",
//     stock = 14
// }
// let candyTwo = {
//     name = "KitKat",
//     stock = 30
// }
// let chips = {
//     name = "SunChips",
//     stock = 28
// } 

class vendingMachine{
    constructor(){


        this.candyOne = "Twix";
        this.candyTwo = "KitKat";
        this.chip = "SunChips";

        this.c1stock = 14;
        this.c2stock = 7;
        this.c3stock = 9;
    }
    vendCandyOne(){
        if (this.c1stock > 0){
            this.c1stock = this.c1stock - 1;
        }
    }
    vendCandyTwo(){
        if (this.c2stock > 0){
            this.c2stock = this.c2stock - 1;
        }
    }
    vendChips(){
        if (this.c3stock > 0){
            this.c3stock = this.c3stock - 1;
        }
    }
    render() {
        return `
        <div>
        Product: ${this.candyOne} Stock: ${this.c1stock}
        </div>
        <div>
        Product: ${this.candyTwo} Stock: ${this.c2stock}
        </div>
        <div>
        Product: ${this.chip} Stock: ${this.c3stock}
        </div>
        `
    }
};

let machine = new vendingMachine