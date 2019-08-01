const initialState = [];

export default function livestreams(state = initialState, action) {
  switch (action.type) {
    case 'GET_LIVE_STREAMS':
      return action.payload;
    default:
      return state;
  }
}
