var express = require("express"),
    app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	Campground = require("./models/campground"),
	seedDB = require("./seeds");


seedDB();

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");



// Campground.create(
// 	{name:"Granite Hill", 
// 	image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547849762f7cd29649_340.jpg",
// 	description:"This is a huge granite hill, no bathroom, no water, beautiful place "
// },function(err,campground){
//     if(err){
//     	console.log(err);

//     }else{
//     	console.log("Save a campground");
//     	console.log(campground);
//     }
// });




// var campgrounds =[
// 	{name:"Salmon Creek", image:"https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e507440752c7bd3914cc1_340.jpg"},
// 	{name:"Granite Hill", image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547849762f7cd29649_340.jpg"},
// 	{name:"Salmon Creek", image:"https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e507440752c7bd3914cc1_340.jpg"},
// 	{name:"Granite Hill", image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547849762f7cd29649_340.jpg"},
// 	{name:"Salmon Creek", image:"https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e507440752c7bd3914cc1_340.jpg"},
// 	{name:"Granite Hill", image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547849762f7cd29649_340.jpg"},
	
// 	{name:"Salmon Creek", image:"https://pixabay.com/get/57e8d1464d53a514f1dc84609620367d1c3ed9e04e507440752c7bd3914cc1_340.jpg"},
// 	{name:"Granite Hill", image:"https://pixabay.com/get/50e9d4474856b10ff3d8992ccf2934771438dbf852547849762f7cd29649_340.jpg"},
// 	{name:"Mountain Goat's Rest", image:"https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e507440752c7bd3914cc1_340.jpg"}	
// 	];



app.get("/",function(req,res){
 res.render("landing");
});

//Index - show a list of campgrounds
app.get("/campgrounds",function(req,res){
	//get all campgrounds from db

Campground.find({},function(err,allCampgrounds){
	if(err){
		console.log("ERROR");
		console.log(err);
	}else{
		res.render("index",{campgrounds:allCampgrounds});
	}
});

	
});


//Create - add a new campground to DB
app.post("/campgrounds", function(req,res){
	//get data form form to array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description:desc}
	//campgrounds.push(newCampground);

	//create a new campground and save to db
	Campground.create(newCampground,function(err,newlyCreated){
		if(err){
			console.log(err);
		}else{
			res.redirect("/campgrounds");
		}
	});
	//redirect back to campgrounds page
	//res.redirect("/campgrounds");

});

//NEW --display form to make a new campground
app.get("/campgrounds/new", function(req,res){
	res.render("new");
});

//ShOW -- show more information about campground

app.get("/campgrounds/:id",function(req,res){
	//find the campground with provided ID
	Campground.findById(req.params.id, function(err,foundCampground){
		if(err){
			console.log(err);
		}else{
			res.render("show",{campground:foundCampground});
			//render show template with that campground

		}
	});
})



app.listen(3000,function(){
     console.log("Server Start!")
});