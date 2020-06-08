var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose")
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});



var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=========================
//ROUTES
//==========================


app.get("/", function(req,res){
	res.render("home");
});

//use isLoggedIn middleware method to check the user in log session or not 
//if not, then do next 
app.get("/secret",isLoggedIn, function(req,res){
	res.render("secret");
});

//AUTH Routes
//show sign up form page
app.get("/register", function(req, res){
   res.render("register"); 
});

//handling user sigh up
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/secret");
        });
    });
});



//Login Routes
//render login form
app.get("/login", function(req,res){
	res.render("login");
})

//login logic 
//middleware run before final call back  ..  try to login you in and check 
app.post("/login", passport.authenticate("local",{
	successRedirect:"/secret", //work
	failureRedirect:"/login"   //doesn't work
}), function(req,res){

});


//Logout 
//add middleware to prevent when we logout, we still can get in the secret page
app.get("/logout", function(req,res){
	req.logout();
	res.redirect("/");
});


function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}


app.listen(3000,function(){
     console.log("Server Start!")
});