import React from 'react'

import './ClockFace.css'

const ClockFace = ({ time, startTime, secondsRemaining }) => {
  let minutes = Math.floor(time / 60);
  let seconds = time - (minutes * 60);

  if (minutes < 10) { minutes = '0' + minutes }
  if (seconds < 10) { seconds = '0' + seconds }

  let classname = startTime && `${secondsRemaining <= 20 && 'red-text'} ${secondsRemaining <= 10 && 'blink'}`;

  return (
    <div className='center-align blue-grey lighten-5'>
      <h1 id='clock--face' className={classname}>{minutes} : {seconds}</h1>
    </div>
  )
};

export default ClockFace
