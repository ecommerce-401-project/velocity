import superagent from 'superagent';

export const getAllGames = () => {
  return dispatch => {
    superagent
      .get(`https://videogame-marketplace.herokuapp.com/games`)
      .then(res => {
        dispatch(getAll(res.body.results));
      })
      .catch(err => console.error(err));
  };
};

const getAll = games => ({
  type: 'GET_ALL_GAMES',
  payload: games,
});

export const saveGame = (data, token) => {
  return dispatch => {
    console.log('TOKEN', token);
    superagent
      .post(
        `https://videogame-marketplace.herokuapp.com/games/${data._id}/save`
      )
      .set('Authorization', `Bearer ${token}`)
      .then(res => {
        dispatch(save(res.body.results));
      })
      .catch(err => console.error(err));
  };
};

const save = games => ({
  type: 'GET_ALL_GAMES',
  payload: games,
});

export const gameById = id => {
  return dispatch => {
    superagent
      .get(`https://videogame-marketplace.herokuapp.com/games/${id}`)
      .then(res => {
        dispatch(viewGame(res.body));
      })
      .catch(err => console.error(err));
  };
};

const viewGame = game => ({
  type: 'GET_GAME',
  payload: game,
});
