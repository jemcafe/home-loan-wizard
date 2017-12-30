import { createStore } from 'redux';
import reducer from './ducks/reducer';

// The reducer is a function that returns a modified state
export default createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );