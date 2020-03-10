var secretNumber =6;

var number = prompt("guess a number?");

if(Number(number)> secretNumber){
	alert("guess too high! Guess again:");

}else if (Number(number) < secretNumber){
	alert("guess too low! Guess again");

}else {
	alert("you got right one!");
}