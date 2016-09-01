require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var score = Infinity;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post("/fewest-guesses", function(req, res) {
	score = (req.body.score < score)? req.body.score : score;
	res.json({
		score: req.body.score	
	})
});
app.get('/fewest-guesses', function(req, res){

	res.json({
		score: score
	})

});

app.listen(8080, function() {
	console.log("listening to the port 8080");
});

// var express = require('express');
// var app = express();

// var lowestScore = Infinity;

// app.get('/getScore', function (req, res) {
//   console.log(lowestScore);
//   res.json({"score": lowestScore});
// });

// app.get('/setScore', function (req, res) {
  
//   console.log(req.query.score); 
//   lowestScore = (req.query.score < lowestScore)? req.query.score : lowestScore;
//   console.log(lowestScore);
//   res.json({"score": req.query.score});
  
// });

// app.listen(8080, function () {
//   console.log('Example app listening on port 8080!');
// });