import { combineReducers } from 'redux';
import currentUser from './user';
import games from './games';

export default combineReducers({
  currentUser,
  games,
});
