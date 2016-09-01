/**
 * { Assigns string to variable to pass into the action.type }
 * @constant
 * @type       {string}
 */
var GENERATE_NUMBER = 'GENERATE_NUMBER';
/**
 * { generateNumber action }
 *
 * @return     {Object}  { returns action type which tells reducer to generate new secret number }
 */
var generateNumber = function() {
    return {
        type: GENERATE_NUMBER
    };
};
/**
 * { Assigns string to variable to pass into the action.type }
 * @constant
 * @type       {string}
 */
var USER_GUESS = 'USER_GUESS';
/**
 * { userGuess action }
 *
 * @param      {number}  usersGuess  The users guess
 * @return     {Object}  { returns action type which tells reducer to compare the userGuess with the secret number }
 */
var userGuess = function(usersGuess) {
    return {
        type: USER_GUESS,
        usersGuess: usersGuess,
    };
};

exports.GENERATE_NUMBER = GENERATE_NUMBER;
exports.generateNumber = generateNumber;
exports.USER_GUESS = USER_GUESS;
exports.userGuess = userGuess;
