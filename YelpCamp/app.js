     var express = require("express"),
    app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	possport =require("passport"),
	LocalStratege = require("passport-local"),
	passportLocalMongoose = require("passport-local-mongoose"),
	Campground = require("./models/campground"),
	Comment     = require("./models/comment"),
	User = require("./models/user"),
	seedDB = require("./seeds")



mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/public"));

app.set("view engine","ejs");

seedDB();


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
		res.render("campgrounds/index",{campgrounds:allCampgrounds});
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
	res.render("campgrounds/new");
});

//ShOW -- show more information about campground

app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log(foundCampground)
            //render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});






//  =========================================
//Comments Routes
//  =========================================

app.get("/campgrounds/:id/comments/new",function(req,res){
	//find campground by id
	Campground.findById(req.params.id,function(err, campground){
		if(err){
			console.log(err);

		}else{
			res.render("comments/new",{campground:campground});
		}
	})
	
});


app.post("/campgrounds/:id/comments", function(req, res){
   //lookup campground using ID
   Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
               campground.comments.push(comment);
               campground.save();
               res.redirect('/campgrounds/'+ campground._id);
           }
        });
       }
   });
   //create new comment
   //connect new comment to campground
   //redirect campground show page
});

app.listen(3000,function(){
     console.log("Server Start!")
});