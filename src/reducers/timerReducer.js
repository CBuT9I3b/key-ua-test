import {
  SET_TIME, START_TIMER, TICK_TIMER, PAUSE_TIMER,
  FINAL_TIMER, RESET_TIMER, CHANGE_SPEED
} from '../actions'

export const initialState = {
  startTime: 0,
  secondsRemaining: 0,
  speed: 1,
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
        isPause: true
      };
    case FINAL_TIMER:
      return {
        ...state,
        isRuns: false
      };
    case RESET_TIMER:
      return {
        ...state,
        startTime: 0,
        secondsRemaining: 0,
        isRuns: false,
        isPause: false
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
