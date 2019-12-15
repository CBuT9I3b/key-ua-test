import { timerReducer, initialState } from './timerReducer'
import {
  SET_TIME, START_TIMER, TICK_TIMER, PAUSE_TIMER,
  FINAL_TIMER, RESET_TIMER, CHANGE_SPEED
} from '../actions'

describe('reducer', () => {
  it('return initial state', () => {
    expect(timerReducer(undefined, {})).toEqual(initialState)
  });

  it('handle SET_TIME', () => {
    expect(timerReducer({}, {
      type: SET_TIME,
      time: 10
    })).toEqual({
      startTime: 10,
      secondsRemaining: 10
    })
  });

  it('handle START_TIMER', () => {
    let iterator = setInterval();
    expect(timerReducer({}, {
      type: START_TIMER,
      iterator: iterator
    })).toEqual({
      iterator: iterator,
      isRuns: true,
      isPause: false
    })
  });

  it('handle TICK_TIMER', () => {
    let secondsRemaining = 10;
    expect(timerReducer({ secondsRemaining: secondsRemaining }, {
      type: TICK_TIMER,
    })).toEqual({
      secondsRemaining: 9
    })
  });

  it('handle PAUSE_TIME', () => {
    expect(timerReducer({}, {
      type: PAUSE_TIMER
    })).toEqual({
      iterator: null,
      isPause: true
    })
  });

  it('handle FINAL_TIMER', () => {
    expect(timerReducer({}, {
      type: FINAL_TIMER
    })).toEqual({
      iterator: null,
      isRuns: false
    })
  });

  it('handle RESET_TIME', () => {
    expect(timerReducer({}, {
      type: RESET_TIMER
    })).toEqual({
      startTime: 0,
      secondsRemaining: 0,
      isRuns: false,
      isPause: false
    })
  });

  it('handle CHANGE_SPEED', () => {
    expect(timerReducer({}, {
      type: CHANGE_SPEED,
      speed: 3
    })).toEqual({
      speed: 3
    })
  })
});
