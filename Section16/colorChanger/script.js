var button = document.querySelector("button");
var purple = false;

button.addEventListener("click", function(){
	if(purple){
			document.body.style.background = "white";
	}else{
		document.body.style.background = "purple";
		purple = !purple;
	}
	
});