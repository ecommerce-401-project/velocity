import * as actions from '../actions/user-actions';

export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.TOKEN_SET:
      return payload;
    case actions.TOKEN_DESTROY:
      return null;
    default:
      return state;
  }
};
