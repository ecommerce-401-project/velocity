const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'SIGNUP_USER':
      return action.payload;
    case 'SIGNIN_USER':
      return action.payload;
    case 'LOGOUT_USER':
    console.log("L-10", "logout user works")
      return initialState;
    default:
      return state;
  }
}
