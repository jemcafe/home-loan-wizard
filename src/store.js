import { createStore } from 'redux';
import reducer from './ducks/reducer';

// The reducer is a function that returns a modified state
export default createStore( reducer );