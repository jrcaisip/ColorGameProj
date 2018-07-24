var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var goalColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = goalColor;
colorDisplay.style.color = goalColor;

startGame();

reset.addEventListener("click",function(){
	colors = generateRandomColors(numberOfSquares);
	goalColor = pickColor();

	startGame();
});


easyBtn.addEventListener("click", function(){
	numberOfSquares = 3;
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(numberOfSquares);
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;
	colorDisplay.style.color = goalColor;

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	numberOfSquares = 6;
	this.classList.add("selected");
	if(easyBtn.classList.contains("selected"))
	easyBtn.classList.remove("selected");

	colors = generateRandomColors(numberOfSquares);
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;
	colorDisplay.style.color = goalColor;

	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";	
	}

});


function startGame(){
	colorDisplay.textContent = goalColor;
	colorDisplay.style.color = goalColor;
	reset.textContent = "New Colors";
	document.querySelector("#message").textContent = "";

	for (var i = 0; i <squares.length; i++){
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor === goalColor){
				// display message
				document.querySelector("#message").textContent = "Correct!";
				changeColors(goalColor);
				document.querySelector("h1").style.backgroundColor = goalColor;
				reset.textContent = "Play Again?";
				colorDisplay.style.color = "white";
			}
			else{
				this.style.backgroundColor = "#232323";
				document.querySelector("#message").textContent = "Try Again!";
			}
		});
	}
}

function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
		if(squares[i].style.backgroundColor!==color){
			squares[i].style.backgroundColor = color;
		}
	}
}

function pickColor(){
	var rand = Math.floor(Math.random()*colors.length);
	return colors[rand];
}

function generateRandomColors(num){
	// make array
	var arr = [];

	// add num random colors to array
	for(var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor());
	}

	// return array
	return arr;
}

function randomColor(){
	// pick a "red" from 0 to 255
	var red = Math.floor(Math.random()*256);
	// pick a "green" from 0 to 255
	var green = Math.floor(Math.random()*256);
	// pick a "blue" from 0 to 255
	var blue = Math.floor(Math.random()*256);

	var color = "rgb(" + red + ", " + green + ", " + blue + ")";

	return color;
}