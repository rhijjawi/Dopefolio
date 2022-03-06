let nocolors = 5;
let colors = {
    0:["#3B6EBA","#739AD3"],
    1:["#6D68BD","#F9CD3"],
    2:["#210070","#213970"],
    3:["#A3D8E0","#C9BDBB"],
    4:["rgba(0, 98, 185, 0.8)","rgba(0, 98, 185, 0.8)"]
}
function random_colors(choices) {
  var index = Math.floor(Math.random() * nocolors);
  return choices[index];
}
c = random_colors(colors);
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementsByClassName('home-hero')[0].style.setProperty('background', `linear-gradient(to right, ${c[0]}, ${c[1]}), url(../../assets/svg/common-bg.svg)`)
});
