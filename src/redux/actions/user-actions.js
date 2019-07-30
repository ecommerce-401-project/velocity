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
  type: 'LOGIN_USER',
  payload: userOBj,
});
