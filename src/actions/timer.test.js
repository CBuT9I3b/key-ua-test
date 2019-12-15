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
    let expectedAction = {
      type: actions.START_TIMER
    };
    expect(actions.startTimer()).toEqual(expectedAction);
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
  it('startTimer', () => {
    let store = mockStore();

    let expectedActions = [
      { type: actions.START_TIMER },
      { type: actions.TICK_TIMER }
    ];

    jest.useFakeTimers();

    store.dispatch(actions.start());

    jest.runOnlyPendingTimers();

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('tick secondsRemaining = 10', () => {
    let store = mockStore({
      startTime: 10,
      secondsRemaining: 10
    });

    let expectedActions = [
      { type: actions.TICK_TIMER }
    ];

    store.dispatch(actions.tick());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('tick if secondsRemaining = 0', () => {
    let store = mockStore({
      startTime: 10,
      secondsRemaining: 0
    });

    let expectedActions = [
      { type: actions.FINAL_TIMER }
    ];

    store.dispatch(actions.tick());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('pause', () => {
    let store = mockStore();

    let expectedActions = [
      { type: actions.PAUSE_TIMER }
    ];

    store.dispatch(actions.pause());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('final', () => {
    let store = mockStore();

    let expectedActions = [
      { type: actions.FINAL_TIMER }
    ];

    store.dispatch(actions.final());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('change isRuns false', () => {
    let store = mockStore({
      isRuns: false,
      isPause: false
    });

    let expectedActions = [
      { type: actions.CHANGE_SPEED, speed: 3 }
    ];

    store.dispatch(actions.change(3));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('change isRuns true isPause true', () => {
    let store = mockStore({
      isRuns: true,
      isPause: true
    });

    let expectedActions = [
      { type: actions.CHANGE_SPEED, speed: 3 }
    ];

    store.dispatch(actions.change(3));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('change isRuns true', () => {
    let store = mockStore({
      isRuns: true,
      isPause: false
    });

    let expectedActions = [
      { type: actions.CHANGE_SPEED, speed: 3 },
      { type: actions.START_TIMER }
    ];

    store.dispatch(actions.change(3));

    expect(store.getActions()).toEqual(expectedActions);
  })
});
