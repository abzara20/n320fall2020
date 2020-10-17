Vue.component("book-view", {
props:["book"],
template:`<div class = \"bookModel\" v-if = \"book.visible\">
         <h2>{{book.cover}}</h2></br>
         <p>Author: {{book.author}}</br> 
         {{book.emoji}} </div>`
});

let app = new Vue({
    el: "#app",
    data:{
        // test:"this works i suppose",
        //property that stores the objects of the two books, in an array
        books:[
            {id:1, cover:"Fairy Tail", author:"Hiro Mashima", emoji:"🧚‍♀️🐉", visible: true},
            {id:2, cover:"Soul Eater", author:"Atsushi Okubo", emoji:"💀👿", visible: false}
        ]
    },
    // method that when the button is pushed will change the visible boolean to the opposite value, showing or hiding the book
    methods: {
        showBook: function(){
            
            if (this.books[1].visible == false){
                this.books[1].visible = true;
            } else {
                this.books[1].visible = false;
            }
            
        }
    }
}); 