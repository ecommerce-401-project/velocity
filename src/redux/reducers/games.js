const initialState = []

export default function games(state = initialState, action) {
    switch (action.type) {
      case 'GET_ALL_GAMES':
        return action.payload;
      default:
        return state;
    }
  }

  