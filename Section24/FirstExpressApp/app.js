var express = require("express");
var app = express();

//3 routes
//"/" => "Hi! there!"
app.get("/",function(req,res){
    res.send("Hi!there");
});

//"/bye" => "GoodBye!"
app.get("/bye",function(req,res){
	res.send("GoodBye");

});
//"/dog" => "MEOW!"
app.get("/dog",function(req,res){
	res.send("MEOW")

}); 

//when access some route except above
app.get("*", function(req,res){
	res.send("You are star!");
});



//Tell Express to listen fpr requests(start serve)
app.listen(3000,function(){
	console.log("start");
});

