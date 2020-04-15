function average(num){
	var total = 0;
   for (var i = 0; i<num.length;i++){
       total = num[i]+total;
   }
   return Math.round(total/num.length);

}



var score = [90,98,89,100,100,86,94];
console.log(average(score));


var score2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(score2));