Vue.component("time-clock", {
    props: ["hour", "time"],
    template:"<p>Component Clock: {{hour}}{{time}}</p>" 
});


let app = new Vue ({
 el: "#app",
 data: {
     message: "this is the time",
     hour: 0, 
     time: ":00"
 },
 methods: {
     timeDisplay: function (){
        this.hour ++;
        if (this.hour > 12) {
            this.hour = 1;
        }
     }
 }
});