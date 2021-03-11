
function abs() {
  window.alert("position set to absolute ");
  document.getElementById("p-image").style.position = "absolute";

}
function rel() {

    window.alert("position set to relative");
  document.getElementById("p-image").style.position = "relative";

}
function stat() {
  window.alert("position set to static ");
document.getElementById("p-image").style.position = "static";

}
function sty() {

    window.alert("position set to sticky ");

  document.getElementById("p-image").style.position = "sticky";

}
function fix() {

window.alert("position set to fixed");
  document.getElementById("p-image").style.position = "fixed";

}
function inh() {
window.alert("position set to inherited");
  document.getElementById("p-image").style.position = "inherit";

}


function change() {

document.getElementById("emoji").src = "images/before.jfif";

}

function normal() {

document.getElementById("emoji").src = "images/after.jpg";

}
function run() {
  document.getElementById("para").style.color="red";

    document.getElementById("para").style.fontSize="50px";
}
function run1() {
  document.getElementById("para").style.fontSize="20px";
    document.getElementById("para").style.color="blue";
}

function hide() {
  document.getElementById("thanos").style.display="none";
}

function show() {
  document.getElementById("thanos").style.display="block";
}

function mouse(e) {
    document.getElementById("a").innerHTML= e.screenX;
    document.getElementById("b").innerHTML= e.screenY;
    document.getElementById("c").innerHTML= e.clientX;
    document.getElementById("d").innerHTML= e.clientY;
}
