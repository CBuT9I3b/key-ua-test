import React from 'react'
import { connect } from 'react-redux'

import './ClockFace.css'

const ClockFace = ({ startTime, secondsRemaining }) => {
  let minutes = Math.floor(secondsRemaining / 60);
  let seconds = secondsRemaining - (minutes * 60);

  if (minutes < 10) { minutes = '0' + minutes }
  if (seconds < 10) { seconds = '0' + seconds }

  let classname = startTime && `${secondsRemaining <= 20 && 'red-text'} ${secondsRemaining <= 10 && 'blink'}`;

  return (
    <div className='center-align blue-grey lighten-5'>
      <h1 id='clock--face' className={classname}>{minutes} : {seconds}</h1>
    </div>
  )
};

const mapStateToProps = ({ startTime, secondsRemaining }) => ({ startTime, secondsRemaining });

export default connect(mapStateToProps)(ClockFace)
