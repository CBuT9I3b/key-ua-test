import React, { Component } from 'react'

import { Button, ClockFace, SelectSpeed, InputPanel } from '..'

import './CountdownTimer.css'

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: 0,
      secondsRemaining: 0,
      speed: 1,
      runs: false,
      pause: false
    }
  }

  setTime = time => {
    this.setState({
      startTime: time,
      secondsRemaining: time
    })
  };

  tick = () => {
    if (this.state.secondsRemaining === 0) {
      this.final()
    } else {
      this.setState(state => ({ secondsRemaining: --state.secondsRemaining }))
    }
  };

  start = () => {
    this.interval = setInterval(this.tick, 1000 / this.state.speed);

    this.setState({ runs: true })
  };

  pause = () => {
    clearInterval(this.interval);

    this.setState({ pause: true })
  };

  resume  = () => {
    this.interval = setInterval(this.tick, 1000 / this.state.speed);

    this.setState({ pause: false })
  };

  final = () => {
    clearInterval(this.interval);

    this.setState({ runs: false })
  };

  reset = () => {
    this.setState({
      startTime: 0,
      secondsRemaining: 0,
      runs: false,
      pause: false
    })
  };

  changeSpeed = event => {
    this.setState(
      { speed: +event.target.value },
      () => {
        if (this.state.runs && !this.state.pause) {
          clearInterval(this.interval);

          this.interval = setInterval(this.tick, 1000 / this.state.speed);
        }
      }
    )
  };

  render() {
    let { startTime, secondsRemaining, speed, runs, pause } = this.state;
    let halfway = secondsRemaining < Math.floor(startTime / 2);

    return (
      <div className='wrap'>
        <div className='wrap--app'>
          {halfway && (
            <div className='message'>
              <h4 className='center-align'>
                {secondsRemaining === 0 ? 'Time’s up!' : 'More than halfway there!'}
              </h4>
            </div>
          )}

          <ClockFace
            time={secondsRemaining}
            startTime={startTime}
            secondsRemaining={secondsRemaining}
          />

          <div className='control--panel'>
            <SelectSpeed
              speed={speed}
              handleChange={this.changeSpeed}
            />

            <Button disabled={runs || secondsRemaining === 0} onClick={this.start}>Start</Button>

            {pause ?
              <Button onClick={this.resume}>Resume </Button> :
              <Button disabled={!runs} onClick={this.pause}>Pause</Button>
            }

            <Button disabled={!pause && runs} onClick={this.reset}>Reset</Button>
          </div>

          <InputPanel
            runs={runs}
            setTime={this.setTime}
          />
        </div>
      </div>
    )
  }
}

export default CountdownTimer
