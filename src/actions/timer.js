// actions

export const SET_TIME = 'SET_TIME';
export const START_TIMER = 'START_TIMER';
export const TICK_TIMER = 'TICK_TIMER';
export const PAUSE_TIMER = 'PAUSE_TIMER';
export const FINAL_TIMER = 'FINAL_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const CHANGE_SPEED = 'CHANGE_SPEED';

// action creators

export const setTime = time => ({
  type: SET_TIME,
  time
});

export const startTimer = iterator => ({
  type: START_TIMER,
  iterator
});

export const tickTimer = () => ({
  type: TICK_TIMER
});

export const pauseTimer = () => ({
  type: PAUSE_TIMER
});

export const finalTimer = () => ({
  type: FINAL_TIMER
});

export const resetTimer = () => ({
  type: RESET_TIMER
});

export const changeSpeed = speed => ({
  type: CHANGE_SPEED,
  speed
});

// thunk functions

export const start = () => (dispatch, getState) => {
  let iterator = setInterval(
    () => dispatch(tick()),
    1000 / getState().speed);
  dispatch(startTimer(iterator))
};

const tick = () => (dispatch, getState) => {
  if (getState().secondsRemaining === 0) {
    dispatch(final())
  } else {
    dispatch(tickTimer())
  }
};

export const pause = () => (dispatch, getState) => {
  clearInterval(getState().iterator);
  dispatch(pauseTimer())
};

export const final = () => (dispatch, getState) => {
  clearInterval(getState().iterator);
  dispatch(finalTimer())
};

export const change = newSpeed => (dispatch, getState) => {
  let { iterator, isRuns, isPause } = getState();
  dispatch(changeSpeed(newSpeed));
  if (isRuns && !isPause) {
    clearInterval(iterator);
    dispatch(start())
  }
};
