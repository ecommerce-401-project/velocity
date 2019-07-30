import cookie from 'react-cookies';
import * as actions from './actions/user-actions';

export const COOKIE_NAME = 'auth';

// const cookie = save.Cookie();

export default store => next => action => {
  switch (action.type) {
    case actions.TOKEN_SET:
      cookie.save(COOKIE_NAME, action.payload, { path: '/' });
      break;

    case actions.TOKEN_DESTROY:
      cookie.remove(COOKIE_NAME, { path: '/' });
      break;

    case actions.TOKEN_FROM_COOKIE:
      var token = cookie.load(COOKIE_NAME);
      if (token) {
        return next(actions.tokenSet(token));
      }
      break;

    default:
      break;
  }
  return next(action);
};
