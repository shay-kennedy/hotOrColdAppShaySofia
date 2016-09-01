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

var FETCH_FEWEST_GUESSES = 'FETCH_FEWEST_GUESSES';
var fetchFewestGuesses = function() {
    return {
        type: FETCH_FEWEST_GUESSES
    };
};

var FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
var fetchFewestGuessesSuccess = function(score) {
    return {
        type: FETCH_FEWEST_GUESSES_SUCCESS,
        score: score

    };
};

var FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR';
var fetchFewestGuessesEroor = function(error) {
    return {
        type: FETCH_FEWEST_GUESSES_SUCCESS,
        error: error

    };
};

var SAVE_FEWEST_GUESSES= 'SAVE_FEWEST_GUESSES';
var saveFewestGuesses = function(fewestGuesses) {
    return {
        type: SAVE_FEWEST_GUESSES,
        fewestGuesses: fewestGuesses
    };
};

exports.FETCH_FEWEST_GUESSES = FETCH_FEWEST_GUESSES;
exports.fetchFewestGuesses = fetchFewestGuesses;
exports.SAVE_FEWEST_GUESSES = SAVE_FEWEST_GUESSES;
exports.saveFewestGuesses = saveFewestGuesses;
exports.FETCH_FEWEST_GUESSES_SUCCESS = FETCH_FEWEST_GUESSES_SUCCESS;
exports.fetchFewestGuessesSuccess = fetchFewestGuessesSuccess;
exports.FETCH_FEWEST_GUESSES_ERROR = FETCH_FEWEST_GUESSES_ERROR;
exports.fetchFewestGuessesError = fetchFewestGuessesError;

var fetchGuesses = function() {
    return function(dispatch) {
        var url = 'http://localhost:8080/fewest-guesses';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response.json();
        })
  
        .then(function(data) {
        		console.log("DATA", data);
            var score = data.score;
            return dispatch(
                fetchFewestGuessesSuccess(score)
            );
        })
        .catch(function(error) {
            var error = "error";
            return dispatch(
                fetchFewestGuessesError(error)
            );
        });
    }
};

var saveGuesses = function() {
    return function(dispatch) {
        var url = 'http://localhost:8080/fewest-guesses';
        return fetch(url, {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: {"count": 4}
    }).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
        return response.json();
    })
    .then(function(data) {
        var guess = data.body.count;
        return dispatch(
            saveFewestGuesses(guess)
        );
    })
    .catch(function(error) {
        var error = "error";
        return dispatch(
            fetchFewestGuessesError(error)
        );
    });
};

exports.saveGuesses = saveGuesses;
exports.fetchGuesses = fetchGuesses;