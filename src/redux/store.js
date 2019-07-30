import reducer from './reducers'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import authCookie from './auth-cookie';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger, authCookie)))

export default store