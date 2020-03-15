var button1 = document.getElementById("p1");
var button2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var input = document.querySelector("input");
var winnerScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


button1.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score ===winningScore) {
			p1Display.classList.add("winner");
			gameOver =true;
		}
		p1Display.textContent = p1Score;
	}
	
	
});


button2.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if (p2Score===winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
	}
	p2Display.textContent = p2Score;
	
});


reset.addEventListener("click", function(){
	resetAll();

});

function resetAll(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}


input.addEventListener("change", function(){
	winnerScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	resetAll();
});



