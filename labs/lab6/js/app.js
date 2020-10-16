Vue.component("book-view", {
props:["book"],
template:`<div><h2>{{book.cover}}</h2>
         </br><p>Author: {{book.author}}</br> {{book.emoji}} </div>`
});

let app = new Vue({
    el: "#app",
    data:{
        test:"this works i suppose",
        books:[
            {id:1, cover:"Fairy Tail", author:"Hiro Mashima", emoji:"😊", display: true},
            {id:2, cover:"Soul Eater", author:"Atsushi Okubo", emoji:"😂", display: false}
        ]
    },
    methods: {
        showBook2: function(){
            console.log("this works");
        }
    }
}); 