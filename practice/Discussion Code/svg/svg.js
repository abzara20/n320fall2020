let sun = document.getElementById("sun");
let yCoord = sun.getAttribute("cy");
function set(){
    yCoord = yCoord -5;
    sun.setAttribute("cy", yCoord);
}