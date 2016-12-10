var redux = require('redux');


console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();




// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
console.log('newState', store.getState());
  if(state.map.isFetching){
    document.getElementById('app').innerHTML = 'Loading ....';
  } else if (state.map.url){
    document.getElementById('app').innerHTML = '<a href="' +state.map.url+'" target="_blank">View your location</a>'
  }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('krzys'));

store.dispatch(actions.addHobby('Runnig'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.addMovie('madmax', 'action'));

store.dispatch(actions.changeName('krzysztof'));
store.dispatch(actions.addMovie('titanic', 'gowno'));
store.dispatch(actions.removeMovie(1));
