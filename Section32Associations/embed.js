var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});

//POST - title, content
var postSchema = new mongoose.Schema({
    title:String, 
    content:String
});

var Post = mongoose.model("Post", postSchema);


//User - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts:[postSchema]
});

var User = mongoose.model("User", userSchema);





// var newUser = new User({
// 	email:"gaga@udel.edu",
// 	name: "gaga"
// });

// newUser.posts.push({
// 	title:"lgagaga",
// 	content:"hi hihihi hi "
// })

// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(user);
// 	}
// });






// var newPost = new Post({
// 	title:"love home",
// 	content:"hi hihihi hi "
// });

// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(post);
// 	}

// });



//retrive exiting user
User.findOne({name:"gaga"}, function(err,user){
		if(err){
		console.log(err);
	}else{
		user.posts.push({
			title:"hihi",
			content:"gugugugu"

		});

		user.save(function(err,user){
			if(err){
			console.log(err);
			}else{
			console.log(user);
			}
		});
	}

});