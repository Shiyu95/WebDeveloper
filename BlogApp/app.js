var express = require("express"), 
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose");

//app config
mongoose.connect("mongodb://localhost:27017/blog_app", {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

//Mongoose/model config
var blogSchema = new mongoose.Schema({
	title:String,
	image:String,
	body:String,
	created:{type:Date, default:Date.now}
});

var Blog = mongoose.model("Blog",blogSchema);

Blog.create({
	title: "Test Blog",
	image: "https://image.shutterstock.com/image-photo/camping-woods-shenandoah-mountain-bonfire-600w-1106316416.jpg",
	body:"Hello"
});

//Restful Routes 
app.get("/", function(req,res){
     res.redirect("/blogs");
});
app.get("/blogs", function(req,res){
	Blog.find({}, function(err, blogs){
		if(err){
			console.log(err);
		}else{
			res.render("index",{blogs:blogs});
		}
	});

});


app.listen(3000, function(){
	console.log("server start");
});