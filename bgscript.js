var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var right = document.querySelector('#right');
var left = document.querySelector('#left');
var tiptop = document.querySelector('#top');
var bottom = document.querySelector('#bottom');

function directionCheck() {
	if (right.checked === true) {
		return 'right';}
	else if (left.checked === true) {
		return 'left';}
	else if (tiptop.checked === true) {
		return 'top';}
	else {
		return 'bottom';}
}


function setGradient() {
	var direction = directionCheck();
	body.style.background = 
	"linear-gradient(to " + direction + ", "  
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ") fixed";

	css.textContent = body.style.background + ";";
}
//set background color that matches initial color 1 & color2 defined
setGradient();

//display css for initial load
css.textContent = body.style.background + ";";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);