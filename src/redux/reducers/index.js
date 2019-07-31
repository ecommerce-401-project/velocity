import { combineReducers } from 'redux';
import currentUser from './user';
import gameView from './game-view';
import games from './games';

export default combineReducers({
  currentUser,
  games,
  gameView,
});
