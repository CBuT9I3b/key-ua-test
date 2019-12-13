import {
  SET_TIME, START_TIMER, TICK_TIMER, PAUSE_TIMER,
  FINAL_TIMER, RESET_TIMER, CHANGE_SPEED
} from '../actions'

const initialState = {
  startTime: 0,
  secondsRemaining: 0,
  speed: 1,
  iterator: null,
  isRuns: false,
  isPause: false
};

export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME:
      return {
        ...state,
        startTime: action.time,
        secondsRemaining: action.time
      };
    case START_TIMER:
      return {
        ...state,
        iterator: action.iterator,
        isRuns: true,
        isPause: false
      };
    case TICK_TIMER:
      return {
        ...state,
        secondsRemaining: --state.secondsRemaining
      };
    case PAUSE_TIMER:
      return {
        ...state,
        iterator: null,
        isPause: true
      };
    case FINAL_TIMER:
      return {
        ...state,
        iterator: null,
        isRuns: false
      };
    case RESET_TIMER:
      return {
        ...state,
        startTime: 0,
        secondsRemaining: 0,
        isRuns: false
      };
    case CHANGE_SPEED:
      return {
        ...state,
        speed: action.speed
      };
    default:
      return state
  }
};
