'use strict';
var redux = require('redux');
var createStore = redux.createStore;


var reducer = function(state, action) {
    state = state || { name: '' };

    var actions = {
            SET_NAME: function() {
                return action.name;
            },
            DEFAULT: function() {
                return state;
            }
        },

        actionType = actions[action.type] || actions.DEFAULT;

    return actionType();
};


var store = createStore(reducer);

store.dispatch({
    type: 'SET_NAME',
    name: 'Marie Ann'
});

console.log('store: ', store);
console.log('store.getState(): ', store.getState());
