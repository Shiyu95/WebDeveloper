//check a todo bu click it
$("ul").on("click","li",function(){
	// //if todo is gray, turn it back to black by click it
	// if($(this).css("color")==="rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		"color":"black",
	// 		"text-decoration":"none"
	// 	});

	// }else{
	// 	$(this).css({
	// 			"color":"gray",
	// 	"text-decoration":"line-through"
	// 	});
	// }
	$(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
})

//add a new todo
$("input[type='text']").keypress(function(event){
 if(event.which===13){
 	//get new todo text form input
 	var todoText = $(this).val();
 	$(this).val(" ");
 	//create new li and add it to ul
 	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>");
 }
});



$(".fa-plus").on("click", function(){
	$("input[type ='text']").fadeToggle();
})