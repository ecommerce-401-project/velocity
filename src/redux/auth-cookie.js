import Cookies from 'universal-cookie';
import * as actions from './actions/user-actions';
const cookies = new Cookies();

const COOKIE_NAME = 'auth';

export default store => next => action => {
  switch (action.type) {
    case 'SIGNUP_USER':
    case 'SIGNIN_USER':
      cookies.set(COOKIE_NAME, action.payload.token);
      break;

    case 'LOGOUT_USER':
      cookies.remove(COOKIE_NAME,action.payload);
      break;

    case actions.TOKEN_FROM_COOKIE:
      var token = cookies.get(COOKIE_NAME);
      if (token) {
        return next(
          actions.loginUser({
            // Note: username is not available. Do we need it?
            token,
          })
        );
      }
      break;

    default:
      break;
  }
  return next(action);
};
