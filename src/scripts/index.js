'use strict';
var redux = require('redux');
var createStore = redux.createStore;
var reducer = require('./reducer');
var store = createStore(reducer);

store.dispatch({
    type: 'SET_NAME',
    name: 'Marie Ann'
});

console.log('store: ', store);
console.log('store.getState(): ', store.getState());
