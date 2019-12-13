import React, { Component } from 'react'

import { Button } from '..'

import './InputPanel.css'

const initialState = {
  minutes: 0,
  seconds: 0
};

class InputPanel extends Component {
  state = initialState;

  handleChange = event => {
    this.setState({ [event.target.id]: +event.target.value })
  };

  setTime = () => {
    let time = this.state.minutes * 60 + this.state.seconds;

    this.setState(initialState);

    this.props.setTime(time)
  };

  render() {
    let { minutes, seconds } = this.state;
    let { runs } = this.props;
    let isInvalid = runs || (minutes * 60 + seconds) <= 0;

    if (minutes < 10) { minutes = '0' + minutes }

    if (seconds < 10) { seconds = '0' + seconds }

    return (
      <div className='input--panel'>
        <div className='input-field'>
          <label htmlFor='minutes' >Minutes</label>
          <input value={minutes} onChange={this.handleChange} id='minutes' type='number' min='0' max='60' />
        </div>
        <div className='input-field'>
          <label htmlFor='seconds' >Seconds</label>
          <input value={seconds} onChange={this.handleChange} id='seconds' type='number' min='0' max='60' />
        </div>
        <Button disabled={isInvalid} onClick={this.setTime}>Input Time</Button>
      </div>
    )
  }
}

export default InputPanel
