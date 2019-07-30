import superagent from 'superagent';

let API = 'https://videogame-marketplace.herokuapp.com';

export const TOKEN_SET = 'TOKEN_SET';
export const tokenSet = token => ({
  type: TOKEN_SET,
  payload: token,
});

export const TOKEN_FROM_COOKIE = 'TOKEN_FROM_COOKIE';
export const tokenFromCookie = () => ({
  type: TOKEN_FROM_COOKIE,
});
export const TOKEN_DESTROY = 'TOKEN_DESTROY';
export const tokenDestroy = () => ({
  type: TOKEN_DESTROY,
});

export const userSignUp = userInfo => {
  return dispatch => {
    superagent
      .post(`${API}/signup`)
      .send(userInfo)
      .then(res => {
        dispatch(tokenSet(res.headers.token));
        dispatch(
          signUpUser({
            ...res.body,
            token: res.headers.token,
          })
        );
      })
      .catch(err => console.error(err));
  };
};

const signUpUser = userOBj => ({
  type: 'SIGNUP_USER',
  payload: userOBj,
});

export const userSignIn = (username, password) => {
  return dispatch => {
    superagent
      .post(`${API}/signin`)
      .auth(username, password)
      .then(res => {
        dispatch(tokenSet(res.headers.token));
        dispatch(
          loginUser({
            ...res.body,
            token: res.headers.token,
          })
        );
      })
      .catch(err => console.error(err));
  };
};

const loginUser = userOBj => ({
  type: 'SIGNIN_USER',
  payload: userOBj,
});
