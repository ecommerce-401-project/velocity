import reducer from './reducers'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)))

export default store