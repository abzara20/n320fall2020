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
    //changed from using the variables to the properties
    // in the constructor in order to better follow the 
    //lab directions and for simplicity
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
        <table>
            <tr>
                <td>Product: ${this.candyOne}</td>
                <td>Stock: ${this.c1stock}</td>
            </tr>
            <tr>
                <td>Product: ${this.candyTwo}</td>
                <td>Stock: ${this.c2stock}</td>
            </tr>
            <tr>
                <td>Product: ${this.chip}</td>
                <td>Stock: ${this.c3stock}</td>
            </tr>
        </table>
        `;
        //OLD RENDER HTML CONTENT
        // <div>
        // Product: ${this.candyOne} Stock: ${this.c1stock}
        // </div>
        // <div>
        // Product: ${this.candyTwo} Stock: ${this.c2stock}
        // </div>
        // <div>
        // Product: ${this.chip} Stock: ${this.c3stock}
        // </div>
    }
};

let machine = new vendingMachine;
console.log(machine.render());
let vendingDiv = document.getElementById("vending");
vendingDiv.innerHTML = machine.render();

function sellC1() {
    machine.vendCandyOne();
    vendingDiv.innerHTML = machine.render();
}
function sellC2() {
    machine.vendCandyTwo();
    vendingDiv.innerHTML = machine.render();
}
function sellC3() {
    machine.vendChips();
    vendingDiv.innerHTML = machine.render();
}