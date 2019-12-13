import {
  SET_TIME, START_TIMER, TICK_TIMER, PAUSE_TIMER,
  FINAL_TIMER, RESET_TIMER, CHANGE_SPEED
} from '../actions'

const initialState = {
  startTime: 0,
  secondsRemaining: 0,
  speed: 1,
  iterator: null,
  runs: false,
  pause: false
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
        runs: true,
        pause: false
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
        pause: false
      };
    case FINAL_TIMER:
      return {
        ...state,
        iterator: null,
        runs: false
      };
    case RESET_TIMER:
      return initialState;
    case CHANGE_SPEED:
      return {
        ...state,
        speed: action.speed
      };
    default:
      return state
  }
};
