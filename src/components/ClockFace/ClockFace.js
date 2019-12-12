import React from 'react'

import './ClockFace.css'

const ClockFace = ({ time }) => {

  let minutes = Math.floor(time / 60);
  let seconds = time - (minutes * 60);

  if (minutes < 10) {
    minutes = '0' + minutes
  }

  if (seconds < 10) {
    seconds = '0' + seconds
  }

  return (
    <div className='center-align blue-grey lighten-5'>
      <h1 id='clock--face'>{minutes} : {seconds}</h1>
    </div>
  )
};

export default ClockFace
