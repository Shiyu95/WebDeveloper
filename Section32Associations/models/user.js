var mongoose = require("mongoose");
//User - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts:[{
		type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
	}]   //a object array
});


module.exports = mongoose.model("Post", postSchema);
//var User = mongoose.model("User", userSchema);