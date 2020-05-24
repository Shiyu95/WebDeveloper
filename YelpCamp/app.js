var express = require("express");
var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
 res.render("landing");
});


app.get("/campgrounds",function(req,res){
	var campgrounds =[
	{name:"Salmon Creek", image:"https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e507440752d7add9049cd_340.jpg"},
	{name:"Granite Hill", image:"https://pixabay.com/get/57e8d0424a5bae14f1dc84609620367d1c3ed9e04e507440752d7add9049cd_340.jpg"},
	{name:"Mountain Goat's Rest", image:"https://pixabay.com/get/52e5d7414355ac14f1dc84609620367d1c3ed9e04e507440752d7add9049cd_340.jpg"}	
	]

	res.render("campgrounds",{campgrounds:campgrounds});
});


app.listen(3000,function(){
     console.log("Server Start!")
});