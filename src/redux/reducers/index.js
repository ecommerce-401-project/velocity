import { combineReducers } from 'redux';
import currentUser from './user';
import games from './games';
import savedGames from './libraryGames';

export default combineReducers({
  currentUser,
  games,
  savedGames,
});
