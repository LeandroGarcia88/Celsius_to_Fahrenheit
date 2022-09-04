
let output = document.getElementById("output");
let input =  document.getElementById("input");
let button = document.getElementById("button")

button.addEventListener("click", converterFahrenheit, false)


let fahrenheit = 0;

function converterFahrenheit(){

	let celsius = parseInt(input.value);

	fahrenheit = ((celsius * 9/5) + 32);

	output.innerHTML = `Grau Celsius: ${celsius} <br>
	Grau Fahrenheit: ${fahrenheit}`;
}