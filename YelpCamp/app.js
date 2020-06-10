     var express = require("express"),
    app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	passport =require("passport"),
	LocalStratege = require("passport-local"),
	passportLocalMongoose = require("passport-local-mongoose"),
	Campground = require("./models/campground"),
	Comment     = require("./models/comment"),
	User = require("./models/user"),
	seedDB = require("./seeds")

//require routes
var commentRoutes = require("./routes/comments"),
	campgroundRoutes = require("./routes/campgrounds"),
	indexRoutes = require("./routes/index");




mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/public"));

app.set("view engine","ejs");

//seed the database
//seedDB();


//PASSPORT configuration
app.use(require("express-session")({
	secret:"momo is very cute",
	resave:false,
	saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratege(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	next();
});


app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


app.listen(3000,function(){
     console.log("Server Start!")
});