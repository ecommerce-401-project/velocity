import { combineReducers } from 'redux';
import currentUser from './user';
import gameView from './game-view';
import games from './games';
import savedGames from './libraryGames';
import livestreams from './live-streams';

export default combineReducers({
  currentUser,
  games,
  savedGames,
  gameView,
  livestreams
});
