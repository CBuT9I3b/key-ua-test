import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button } from '..'

import { setTime } from '../../actions'

import './InputPanel.css'

const initialState = {
  minutes: '',
  seconds: ''
};

export class InputPanel extends Component {
  state = initialState;

  handleChange = event => {
    this.setState({ [event.target.id]: +event.target.value })
  };

  setTime = () => {
    let time = this.state.minutes * 60 + this.state.seconds;

    this.setState(initialState);

    this.props.dispatch(setTime(time))
  };

  render() {
    let { minutes, seconds } = this.state;
    let { isRuns } = this.props;
    let isInvalid = isRuns || (minutes * 60 + seconds) <= 0;

    return (
      <form className='input--panel' onSubmit={this.setTime}>
        <div className='input-field'>
          <label htmlFor='minutes' >Minutes</label>
          <input
            placeholder='1'
            value={minutes}
            onChange={this.handleChange}
            id='minutes'
            type='number'
            min='0' max='60'
          />
        </div>
        <div className='input-field'>
          <label htmlFor='seconds' >Seconds</label>
          <input
            placeholder='0'
            value={seconds}
            onChange={this.handleChange}
            id='seconds'
            type='number'
            min='0' max='59'
          />
        </div>
        <Button
          id='btn--enter--time'
          type='submit'
          disabled={isInvalid}
          onClick={this.setTime}
        >Enter Time</Button>
      </form>
    )
  }
}

const mapStateToProps = ({ isRuns }) => ({ isRuns });

export default connect(mapStateToProps)(InputPanel)
