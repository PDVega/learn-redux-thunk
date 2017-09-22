import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import counterReducer from '../reducers/counterReducer'
import userReducer from '../reducers/userReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
})

const middleware = applyMiddleware(thunk)
const store = createStore(rootReducer, middleware)
export default store
