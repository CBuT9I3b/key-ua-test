import React, { Component } from 'react'

import Button from './Button'

import './InputPanel.css'

class InputPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 1
    }
  }

  handleChange = event => this.setState({ minutes: +event.target.value });

  setTime = () => {
    let time = this.state.minutes * 60;

    this.setState({ minutes: 1 });

    this.props.setTime(time)
  };

  render() {
    let { minutes } = this.state;
    let { runs } = this.props;
    let isInvalid = runs || minutes <= 0;

    return (
      <div className='input--panel'>
        <div className='input-field'>
          <label htmlFor='minutes' >Minutes</label>
          <input value={minutes} onChange={this.handleChange} id='minutes' type='number' min='1' max='60' />
        </div>
        <Button disabled={isInvalid} onClick={this.setTime}>Input Time</Button>
      </div>
    )
  }
}

export default InputPanel
