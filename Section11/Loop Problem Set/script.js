
var number1 = -10;
console.log("Print all numbers between -10 and 19: ");
while(number1<=19){
	console.log(number1);

	number1++;
}


var number2 = 10;
console.log("Print all even numbers betwween 10 and 40: ");
while(number2<=40){
	if(number2%2===0){
		console.log(number2);
	}
	number2++;
}

while(number2<=40){
	
	console.log(number2);
	number2+=2;
}

var number3 = 300;
console.log("Print all odd numbers betwween 300 and 333: ");
while(number3<=333){
	if(number3%2!==1){
		console.log(number3);
	}
	number3++;
}



var number4 = 5;
console.log("Print all numbers divisible by 5 AND 3 betwween 5 and 50: ");
while(number4<=50){
	if (number4%5===0 && number4%3===0) {
		console.log(number4);
	}
	number4++;
}