var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./actions');
/**
 * @brief [Form Component]
 * @details [Grabs the value of input and sends it to the store by triggering the userGuess action]
 * 
 * @param  [passing the event.preventDefault() to prevent page reload on form submit]
 * @return [A Form tag with an input and a button]
 */
var Form= React.createClass({
/**
 * @brief [addNewGuess callback]
 * @details [takes care of the behavior of submit event handler]
 * 
 * @param  [event] - Is required to prevent reload on submit
 * @return [Assigns the value of input to a variable and then dispatches value through the action to the reducer which update the store]
 */
	addNewGuess: function (e) {
		e.preventDefault();
		var guessValue = this.refs.inputValue.value;
		console.log(guessValue);
		this.props.dispatch(actions.userGuess(guessValue));
		this.refs.inputValue.value = '';
	},
/**
 * @brief [Renders Component to DOM]
 * @details [Contains the Form tag with input and button]
 * @return [returns the elements to the DOM]
 */
	render: function () {
		return (
			<div>
				
				<form type="submit" >
					<input type="text" placeholder="Enter your Guess" ref="inputValue" />
					<button onClick={this.addNewGuess} >Guess</button>
				</form>
			</div>
		)
	}
});
/**
 * @brief [Connecting component to Reducer]
 * @details [Allows Form to have access to dispatch method.]
 * 
 * @param  [Form Component]
 */
var Container = connect()(Form);

module.exports = Container;

// module.exports = Form;



