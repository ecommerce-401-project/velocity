import cookie from 'react-cookies';
import superagent from 'superagent';

let API = 'https://videogame-marketplace.herokuapp.com';

export const userSignUp = userInfo => {
  return dispatch => {
    superagent
      .post(`${API}/signup`)
      .send(userInfo)
      .then(res => {
        cookie.save('token', res.headers.token);
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
        cookie.save('token', res.headers.token);
        console.log(res.headers.token);
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
