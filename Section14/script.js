var movies = [
{title:"In Bruges",
rating: 5,
hasWatched:"watched"},
{title:"Frozen",
rating: 4.5,
hasWatched:"not seen"},
{title:"Mad Max Fury Road",
rating: 5,
hasWatched:"seen"},
{title:"Les Miserables",
rating: 3.5,
hasWatched:"not seen"}

]

var start = "You have "
movies.forEach(function(movie){
	console.log(start+movie.hasWatched+movie.title+" - "+movie.rating +" startS.")
})