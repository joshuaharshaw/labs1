var circle = document.getElementById('circle');
var input = document.getElementById('radius');

input.addEventListener("change", function () {changeCircle(radius);});

console.log(radius);

function changeCircle (input) {

	var radius = input.value; 

	circle.style.width = radius * 2 +  "px";
	circle.style.height = radius *2 +  "px";
	circle.style.borderRadius = radius + "px";

	var target =  document.getElementById('area');

	var area = calcArea(radius);

	target.innerHTML = `A circle with a radius of ${radius}px has an area of ${area.toFixed(0)}px.`;

}

function calcArea (radius) {

	return (Math.PI) * (radius * radius); 

}