var mongoose = require("mongoose");
var Campground = require("./models/campground");


var data = [
{
	name = "Cloud's Rest",
	image = " https://image.shutterstock.com/image-photo/family-vacation-travel-holiday-trip-600w-691677433.jpg"
}]


function seedDB(){
	//remove all data from the DB
	Campground.deleteMany({}, function(err){
		if(err){
			console.loh(err);
		}else{
			console.log("remove Campground");
		}
	});
	//add a few campgrounds
	campground.create
	



	//add a few comments
}


module.exports = seedDB;

