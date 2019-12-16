import React from 'react'

import { MessagePanel, ClockFace, ControlPanel, InputPanel } from '..'

import './CountdownTimer.css'

const CountdownTimer = () => (
  <div className='wrap'>
    <div className='wrap--app'>
      <MessagePanel />

      <ClockFace />

      <ControlPanel />

      <InputPanel />
    </div>
  </div>
);



export default CountdownTimer
