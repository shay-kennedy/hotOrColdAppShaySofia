var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;

var Form = require('./form');
var NewGame = require('./newGame');
var actions = require('./actions');


var Game = React.createClass({
	restartGame: function(){
		this.props.dispatch(actions.generateNumber());
	},
	render: function () {
		var myArray = this.props.guesses
		console.log(this.props)
		var passGuess = myArray.map(function(value, index){
			return <li key={index}>{value}</li>;
		});
		return (
			<div>
				<h1>HOT or COLD</h1>
				<div className="feedback">{this.props.feedback}</div>
				<Form  />
				<div className="counter">Guess #{this.props.counter}</div>
				<ul>
					{passGuess}
				</ul>
				<NewGame newGame={this.restartGame} />	
			</div>
		)
	}
});

var mapStateToProps = function(state, props) {
    return {
        feedback: state.compareGuess,
        counter: state.guessCount,
        guesses: state.guessList,
        secretNumber: state.number 

    };
};

var Container = connect(mapStateToProps)(Game);

module.exports = Container;



// Form with input and button
// Display array of past guesses
// Display #Count 
// Area to display the Feedback message 
//button to restart the game 
