var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser: true, useUnifiedTopology: true});

var Post = require("./models/post");
var User = require("./models/post");


// User.create({
//             email: "bob@gmail.com",
//             name: "Bob Belcher"
//         });

User.find({},function(err,user){
	console.log(user);

})



// Post.create({
//   title: "How to cook the best burger pt. 4",
//   content: "AKLSJDLAKSJD"
// }, function(err, post){
//     User.findOne({name:"Bob Belcher"}, function(err, foundUser){
//         if(err){
//             //console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     //console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });






User.remove({}, function() {
    Post.remove({}, function() {
        User.create({
            email: "bob@gmail.com",
            name: "Bob Belcher"
        }, function(err, user) {
            if(err) {
                console.log(err);
            } else {
                User.findOne({name:"shiyu"}).populate("posts").exec(function(err, foundUser){
                    if(err) {
                        console.log(err);
                    } else {
                        console.log(foundUser);
                        Post.create({
                          title: "How to cook the best burger pt. 2",
                          content: "blah blah blah blah blah"
                        }, function(err, post){
                            if(err) {
                                console.log(err);
                            } else {
                                User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
                                    if(err){
                                        console.log(err);
                                    } else {
                                        foundUser.posts.push(post);
                                        foundUser.save(function(err, data){
                                            if(err){
                                                console.log(err);
                                            } else {
                                                console.log(data);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
 
    });
});

// Find user
// find all posts for that user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });


// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });