import React from 'react'
import { connect } from 'react-redux'

const MessagePanel = ({ startTime, secondsRemaining }) => {
  let halfway = secondsRemaining < Math.floor(startTime / 2);

  return halfway && (
    <div className='message'>
      <h4 className='center-align'>
        {secondsRemaining === 0 ? 'Time’s up!' : 'More than halfway there!'}
      </h4>
    </div>
  )
};


const mapStateToProps = ({ startTime, secondsRemaining }) => ({ startTime, secondsRemaining });

export default connect(mapStateToProps)(MessagePanel)
