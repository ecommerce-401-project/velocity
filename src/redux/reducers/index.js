import { combineReducers } from 'redux';
import currentUser from './user';

const rootReducer = combineReducers({
  currentUser: currentUser,
});

export default rootReducer;
