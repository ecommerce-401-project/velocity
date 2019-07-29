const initialState = {
}

export default function games(state = initialState, action) {
    switch (action.type) {
      case '':
        return action.payload;
      case '':
        return initialState;
      default:
        return state;
    }
  }