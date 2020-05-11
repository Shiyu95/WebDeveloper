var express = require("express");
var app = express();


//3 rounts

app.get("/",function(req,res){
	res.send("Hi!there, welcome to my assignment!");

});


app.get("/speak/:animal",function(req,res){
//set the varible 
var sounds = {
	pig: "Olink",
	cow: "Moo",
	dog: "Woof Woof!",
	cat: "I hate you human",
	goldfish: "..."
}
var animal = req.params.animal.toLowerCase();
var sound = sounds[animal];
res.send("The " +animal +" says' " + sound+"'");

});


app.get("/repeat/:message/:times",function(req,res){
  var message = req.params.message;
  var times = Number(req.params.times);
  var result = "";

  for (var i = 0; i < times; i++) {
  	result += message + " ";
  }


  res.send(result);//can only happen once, can't use it in the loop


});


app.get("*",function(req,res){
 res.send("Sorry, page not fond... What are you doing with your life?")
})




//tell express to listen for request
app.listen(3000,function(){
	console.log("server start");
});
