var React = require('react');
// var actions = require('./actions');
// var connect = require('react-redux').connect;



var NewGame = React.createClass({
	render: function () {
		return (
			<div>
				<input type="button" onClick={this.props.newGame} value="New Game" />
			</div>
		);
	}
});


module.exports = NewGame;