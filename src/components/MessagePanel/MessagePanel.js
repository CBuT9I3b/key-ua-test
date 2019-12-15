import React from 'react'
import { connect } from 'react-redux'

export const MessagePanel = ({ startTime, secondsRemaining }) => {
  let halfway = !!startTime && secondsRemaining <= Math.floor(startTime / 2);

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
