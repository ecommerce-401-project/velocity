import { combineReducers } from 'redux';
import currentUser from './user';
import auth from './auth';
import games from './games';

const rootReducer = combineReducers({
  currentUser,
  games,
  auth,
});

export default rootReducer;
