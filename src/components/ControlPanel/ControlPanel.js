import React from 'react'
import { connect } from 'react-redux'

import { Button, SelectSpeed } from '..'

import { start, pause, resetTimer } from '../../actions'

import './ControlPanel.css'

const ControlPanel = ({ dispatch, secondsRemaining, isRuns, isPause }) => (
  <div className='control--panel'>
    <SelectSpeed />

    <Button disabled={isRuns || secondsRemaining === 0} onClick={() => dispatch(start())}>Start</Button>

    {isPause ?
      <Button onClick={() => dispatch(start())}>Resume</Button> :
      <Button disabled={!isRuns} onClick={() => dispatch(pause())}>Pause</Button>
    }

    <Button disabled={!isPause && isRuns} onClick={() => dispatch(resetTimer())}>Reset</Button>
  </div>
);

const mapStateToProps = ({ secondsRemaining, isRuns, isPause }) => ({ secondsRemaining, isRuns, isPause });

export default connect(mapStateToProps)(ControlPanel)
