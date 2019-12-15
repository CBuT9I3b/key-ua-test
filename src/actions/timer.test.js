import * as actions from './timer'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('actions', () => {
  it('setTime', () => {
    let time = 10;
    let expectedAction = {
      type: actions.SET_TIME,
      time
    };
    expect(actions.setTime(time)).toEqual(expectedAction)
  });

  it('startTimer', () => {
    let iterator = setInterval();
    let expectedAction = {
      type: actions.START_TIMER,
      iterator
    };
    expect(actions.startTimer(iterator)).toEqual(expectedAction);
    clearInterval(iterator)
  });

  it('tickTimer', () => {
    let expectedAction = {
      type: actions.TICK_TIMER
    };
    expect(actions.tickTimer()).toEqual(expectedAction);
  });

  it('pauseTimer', () => {
    let expectedAction = {
      type: actions.PAUSE_TIMER
    };
    expect(actions.pauseTimer()).toEqual(expectedAction);
  });

  it('finalTimer', () => {
    let expectedAction = {
      type: actions.FINAL_TIMER
    };
    expect(actions.finalTimer()).toEqual(expectedAction);
  });

  it('resetTimer', () => {
    let expectedAction = {
      type: actions.RESET_TIMER
    };
    expect(actions.resetTimer()).toEqual(expectedAction)
  });

  it('cahngeSpeed', () => {
    let speed = 3;
    let expectedAction = {
      type: actions.CHANGE_SPEED,
      speed
    };
    expect(actions.changeSpeed(speed)).toEqual(expectedAction)
  })
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('thunk functions', () => {
  let store = mockStore();

  it('startTimer', () => {
    let expectedActions = [
      { type: actions.START_TIMER, iterator: 17 },
    ];

    store.dispatch(actions.start());
    expect(store.getActions()).toEqual(expectedActions)
  })
});
