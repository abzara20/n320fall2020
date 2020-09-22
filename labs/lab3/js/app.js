let candyOne = {
    name = "Twix",
    stock = 14
}
let candyTwo = {
    name = "KitKat",
    stock = 30
}
let chips = {
    name = "SunChips",
    stock = 28
} 

class vendingMachine{
    constructor( c1, c2, chip, stock1, stock2, stock3){
        this.candyOne = c1;
        this.candyTwo = c2;
        this.chip = chip;
        this.c1stock = stock1;
        this.c2stock = stock2;
        this.c3stock = stock3;
    }
    vend(){

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
