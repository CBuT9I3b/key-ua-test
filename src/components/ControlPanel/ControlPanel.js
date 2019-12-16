import React from 'react'
import { connect } from 'react-redux'

import { Button, SelectSpeed } from '..'

import { start, pause, resetTimer } from '../../actions'

import './ControlPanel.css'

export const ControlPanel = ({ dispatch, startTime, secondsRemaining, isRuns, isPause }) => (
  <div className='control--panel'>
    <SelectSpeed />

    <Button
      id='btn--start'
      disabled={isRuns || secondsRemaining === 0}
      onClick={() => dispatch(start())}
    >Start</Button>

    {isPause ?
      <Button
        id='btn--resume'
        onClick={() => dispatch(start())}
      >Resume</Button> :
      <Button
        id='btn--pause'
        disabled={!isRuns}
        onClick={() => dispatch(pause())}
      >Pause</Button>
    }

    <Button
      id='btn--reset'
      disabled={(!startTime || isRuns) && !isPause}
      onClick={() => dispatch(resetTimer())}
    >Reset</Button>
  </div>
);

const mapStateToProps = ({ startTime, secondsRemaining, isRuns, isPause }) => ({ startTime, secondsRemaining, isRuns, isPause });

export default connect(mapStateToProps)(ControlPanel)
