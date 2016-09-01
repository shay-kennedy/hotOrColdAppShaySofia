//// HOT OR COLD STORE

var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;
var reducers = require('./reducers');

var store = createStore(reducers.hotOrColdReducer, applyMiddleware(thunk));
module.exports = store;




