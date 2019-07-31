import superagent from 'superagent';

let API = 'https://videogame-marketplace.herokuapp.com';

export const userSignUp = userInfo => {
  return dispatch => {
    superagent
      .post(`${API}/signup`)
      .send(userInfo)
      .then(res => {
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

export const loginUser = userOBj => ({
  type: 'SIGNIN_USER',
  payload: userOBj,
});

export const TOKEN_FROM_COOKIE = 'TOKEN_FROM_COOKIE';

export const tokenFromCookie = () => ({
  type: TOKEN_FROM_COOKIE,
});

// export const userSignOut = userInfo => {
//   return dispatch => {
//     // superagent
//       // .post(`${API}/signup`)
//       // .send(userInfo)
//       // .then(res => {
//         dispatch(
//           signOut({
//             // ...res.body,
//             token: userInfo,
//           })
//         )
//       // })
//       .catch(err => console.error(err));
//   };
// };

export const userSignOut = token => ({
  type: 'LOGOUT_USER',
  payload: token,
});