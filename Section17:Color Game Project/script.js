
var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");




easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares =3;
	//generate new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change the display color to match the new color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < square.length; i++) {
		if (colors[i]) {
			square[i].style.backgroundColor = colors[i];
		} else {
			square[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquares = 6;
	//generate new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change the display color to match the new color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < square.length; i++) {
		
			square[i].style.backgroundColor = colors[i];
			square[i].style.display = "block";

	}
})

reset.addEventListener("click",function(){
	//generate new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change the display color to match the new color
	colorDisplay.textContent = pickedColor;
	message.textContent="";
	reset.textContent="New Colors";
	//change colors of squares
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})
	
for (var i = 0; i < square.length; i++) {
		//add initial color to squares
		square[i].style.backgroundColor = colors[i];

		//add eventListener to each square
		square[i].addEventListener("click", function(){
			//get the click color and compare them
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				message.textContent = "Correct.";
				reset.textContent = "Play Again?";
			}else{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again.";

			}

		})
	}

function changeColor(color){
for (var i = 0; i < square.length; i++) {
	square[i].style.backgroundColor = color;
}
}


function pickColor(){
	//to get a random color
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];

}


function generateRandomColors(num){
//define a new array
 var arr = [];
//add random number to the array
for (var i = 0; i < num; i++) {
//get ramdom color and push it ro a array
 arr.push(randomColor());
}

//return a array
return arr;
}



function randomColor(){
	//pick a "rea" from 0 - 255
    var r = Math.floor(Math.random()*256);
	
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random()*256);

	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}








