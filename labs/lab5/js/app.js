
let wrapper = document.getElementById("wrapper");

TweenMax.from(wrapper, {duration:2.5, alpha:0, y: 200});

let banner = document.getElementById("banner");
// console.log(banner);



let boxArray = document.getElementsByClassName("boxes");

for (i = 0; i < boxArray.length; i++){

    boxArray[i].addEventListener("mouseover", highlight);
    boxArray[i].addEventListener("mouseout", deselect);
    boxArray[i].addEventListener("click", clickAnimation);

}

function highlight(event){
    TweenMax.to(event.target, {duration:1.5, scale:1.1, backgroundColor: "gray"});
}

function deselect(event){
    TweenMax.to(event.target, {duration:1, scale:1, backgroundColor: "#66cdaa"});
}

function clickAnimation(event){
    TweenMax.to(event.target, {duration:3, alpha:0, y:-1000});
}
