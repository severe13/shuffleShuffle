var movie = [$('#avatar'), $('#titanic'), $('#avengers'), $('#dark-knight'), $('#phantom-menace'), 
$('#star-wars'), $('#knight-rises'), $('#shrek'), $('#et'), $('#hunger-games')];

$("button").on("click", function() {
  shuffle(movie)
});
    
function shuffle(movie) {
  var n = movie.length, t, i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    t = movie[n];
    movie[n] = movie[i];
    movie[i] = t;
    movie[n].css({
      "position" : "absolute",
    })
    movie[n].animate({
      "left" : 160 + (n * 116) + "px",
      "bottom" : "55%",
    }, 300 * n);
  };
};    
