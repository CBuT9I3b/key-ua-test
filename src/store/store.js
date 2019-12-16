import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export const configureStore = reducers => (
  createStore(
    reducers,
    applyMiddleware(thunk)
  )
);
