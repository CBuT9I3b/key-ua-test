import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '../../store'
import { timerReducer } from '../../reducers'

import { CountdownTimer } from '..'

const store =  configureStore(timerReducer);

export const App = () => (
  <Provider store={store}>
    <CountdownTimer />
  </Provider>
);

export default App
