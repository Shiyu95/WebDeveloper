var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");


var catSchema = new mongoose.Schema({
	name:String,
	age:Number,
	temperamet:String
});


var Cat = mongoose.model("Cat", catSchema);


// // add a new cat to the DB
// var george = new Cat({
// 	name:"George",
// 	age:11,
// 	temperamet:"Grouchy"
// });

// //save george to the db, call beack
// george.save(function(err, cat){
// 	if(err){
// 		console.log("SOMETHING WENT WRONG!");

// 	}else{
// 		console.log("WE JUST SAVED A CAT TO THE DB")
// 		console.log(cat);
// 	}
// });


//new and save a cat in a db
Cat.create({
  name:"Snow",
  age:15,
  temperamet:"Bland" 
},function(err,cat){
	if(err){
		console.log("ERROR");
	}else{
		console.log("Save A Cat");
		console.log(cat);
	}

});


//retreve all cats from the DB and console.log each one
Cat.find({},function(err,cats){if(err){
	console.log("OH, ERROR");
	console.log(err);
}else{
	console.log(cats);
}

})