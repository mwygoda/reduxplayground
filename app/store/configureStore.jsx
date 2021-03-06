var redux = require('redux');
var thunk = require('redux-thunk').default;

export var configure = () => {
var {nameReducer,hobbiesReducer,moviesReducer,mapReducer} = require('./../reducers/index')

  var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),

    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}
