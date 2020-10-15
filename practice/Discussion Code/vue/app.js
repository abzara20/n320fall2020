Vue.component("discussion-view", {
props:["message"],
template:"<p>here is a message for you: {{message}}<p>"
})

let app = new Vue ({
el: "#app",
data: {
    words: "I'm well, thanks for asking!",
    greetings: ["Buenos Tardes", "Good Afternoon", "こんにちわ"],
    message: "hey, what's poppin?"   
}
});