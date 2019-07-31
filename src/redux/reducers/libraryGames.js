const initialState = []

export default function savedGames(state = initialState, action) {
    switch (action.type) {
      case 'GET_SAVED_GAMES':
        return action.payload;
      default:
        return state;
    }
  }
