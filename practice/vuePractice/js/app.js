
Vue.component("coffee-view", {
    props: ["coffee"],
    template: "<li>{{ coffee.name }} : ${{coffee.price}}</li>"
});

let app = new Vue({
    el: "#app",
    data: { 
        purchases: 0,
        message: "Coffee",
        ready: true,
        coffees: [
          { id: 0, price: 5, name: "Starbucks"},
          { id: 2, price: 10, name: "Death Wish Coffee"}, 
          { id: 40, price: 15, name: "Blue Mountain"}]
    },
    methods: {
        buyCoffee: function() {
            this.purchases += 1;
        }   
    }
});

