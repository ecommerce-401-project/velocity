let initialState = []

export default function games(state = initialState, action) {
    switch (action.type) {
      case 'GET_ALL_GAMES':
        return action.payload;
      case 'GET_SAVED_GAMES':
        return initialState = {
          ...action.payload
        };
      default:
        return state;
    }
  }
