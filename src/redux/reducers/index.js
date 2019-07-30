import { combineReducers } from 'redux';
import currentUser from './user';
import games from './games';

const rootReducer = combineReducers({
  currentUser,
  games,
});

export default rootReducer;
