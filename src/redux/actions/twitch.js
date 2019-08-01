import superagent from 'superagent';

let API = 'https://api.twitch.tv/kraken/streams/featured';

export const getTwitchStreams = () => {
  return dispatch => {
    superagent
      .get(`${API}?limit=3`)
      .set('Client-ID', '4km08nhf5soq3pszpl35xkbmjt4izm')
      .set('Accept', 'application/vnd.twitchtv.v5+json')
      .then(res => {
        dispatch(displayLiveStreams(res.body.featured));
        console.log(res.body);
      })
      .catch(err => console.error(err));
  };
};

const displayLiveStreams = streams => ({
  type: 'GET_LIVE_STREAMS',
  payload: streams,
});
