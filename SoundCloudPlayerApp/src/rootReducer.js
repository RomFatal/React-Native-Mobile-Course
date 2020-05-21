import { combineReducers } from 'redux';
import playerReducer from './components/Reducer';

export default combineReducers({
  player: playerReducer
});
