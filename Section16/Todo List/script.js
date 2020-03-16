var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("mouseover", function(){
	this.classList.add("selector");
});
	lis[i].addEventListener("mouseout", function(){
	this.classList.remove("selector");
});

	lis[i]. addEventListener("click", function(){
		this.classList.toggle("done");
	});
}
