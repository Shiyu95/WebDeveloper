var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req,res,next){
if(req.isAuthenticated()){
		 
		Campground.findById(req.params.id, function(err,foundCampground){
			if(err){
			res.redirect("back");
			}else{
			//does user own the campground?
			// console.log(foundCampground.author.id);//String
			// console.log(req.user._id);//mongoose object
			if(foundCampground.author.id.equals(req.user._id)){
				next();
			}else{
			 	res.redirect("back");
			}
			}
		});
	}else{
		res.redirect("back");//pervious page they are
	}

};

middlewareObj.checkCommentOwnership = function(req,res,next){
if(req.isAuthenticated()){
     
    Comment.findById(req.params.comment_id, function(err,foundComment){
      if(err){
      res.redirect("back");
      }else{
      //does user own the campground?
      // console.log(foundCampground.author.id);//String
      // console.log(req.user._id);//mongoose object
      if(foundComment.author.id.equals(req.user._id)){
        next();
      }else{
        res.redirect("back");
      }
      }
    });
  }else{
    res.redirect("back");//pervious page they are
  }


};



middlewareObj.isLoggedIn = function(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");


}

module.exports = middlewareObj;