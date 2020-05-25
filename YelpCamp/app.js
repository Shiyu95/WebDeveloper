var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");



var campgrounds =[
	{name:"Salmon Creek", image:"https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e507440752c7bd3914cc1_340.jpg"},
	{name:"Granite Hill", image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547849762f7cd29649_340.jpg"},
	{name:"Salmon Creek", image:"https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e507440752c7bd3914cc1_340.jpg"},
	{name:"Granite Hill", image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547849762f7cd29649_340.jpg"},
	{name:"Salmon Creek", image:"https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e507440752c7bd3914cc1_340.jpg"},
	{name:"Granite Hill", image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547849762f7cd29649_340.jpg"},
	
	{name:"Salmon Creek", image:"https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e507440752c7bd3914cc1_340.jpg"},
	{name:"Granite Hill", image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547849762f7cd29649_340.jpg"},
	{name:"Mountain Goat's Rest", image:"https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e507440752c7bd3914cc1_340.jpg"}	
	];



app.get("/",function(req,res){
 res.render("landing");
});


app.get("/campgrounds",function(req,res){
	

	res.render("campgrounds",{campgrounds:campgrounds});
});



app.post("/campgrounds", function(req,res){
	//get data form form to array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	//redirect back to campgrounds page
	res.redirect("/campgrounds");

});


app.get("/campgrounds/new", function(req,res){
	res.render("new");
});


app.listen(3000,function(){
     console.log("Server Start!")
});