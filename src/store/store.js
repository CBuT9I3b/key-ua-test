import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'

export const configureStore = reducers => (
  createStore(
    reducers,
    applyMiddleware(thunk)
  )
);
