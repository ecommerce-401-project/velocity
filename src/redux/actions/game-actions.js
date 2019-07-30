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
