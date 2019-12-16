import React from 'react'
import { shallow } from 'enzyme'

import { ControlPanel } from './ControlPanel'

describe('test ControlPanel', () => {
  it('render ControlPanel', () => {
    let panel = shallow(<ControlPanel />);
    expect(panel.length).toEqual(1)
  });

  it('initial', () => {
    let props = {
      startTime: 0,
      secondsRemaining: 0,
      isRuns: false,
      isPause: false
    };

    let panel = shallow(<ControlPanel {...props} />);

    expect(panel.find('#btn--start').prop('disabled')).toBeTruthy();
    expect(panel.find('#btn--pause').prop('disabled')).toBeTruthy();
    expect(panel.find('#btn--resume').length).toEqual(0);
    expect(panel.find('#btn--reset').prop('disabled')).toBeTruthy()
  });

  it('secondsRemaining true', () => {
    let props = {
      startTime: 10,
      secondsRemaining: 10,
      isRuns: false,
      isPause: false
    };

    let panel = shallow(<ControlPanel {...props} />);

    expect(panel.find('#btn--start').prop('disabled')).toBeFalsy();
    expect(panel.find('#btn--pause').prop('disabled')).toBeTruthy();
    expect(panel.find('#btn--resume').length).toEqual(0);
    expect(panel.find('#btn--reset').prop('disabled')).toBeFalsy()
  });

  it('secondsRemaining true isRuns true', () => {
    let props = {
      startTime: 10,
      secondsRemaining: 10,
      isRuns: true,
      isPause: false
    };

    let panel = shallow(<ControlPanel {...props} />);

    expect(panel.find('#btn--start').prop('disabled')).toBeTruthy();
    expect(panel.find('#btn--pause').prop('disabled')).toBeFalsy();
    expect(panel.find('#btn--resume').length).toEqual(0);
    expect(panel.find('#btn--reset').prop('disabled')).toBeTruthy()
  });

  it('secondsRemaining true isRuns true isPause true', () => {
    let props = {
      startTime: 10,
      secondsRemaining: 10,
      isRuns: true,
      isPause: true
    };

    let panel = shallow(<ControlPanel {...props} />);

    expect(panel.find('#btn--start').prop('disabled')).toBeTruthy();
    expect(panel.find('#btn--pause').length).toEqual(0);
    expect(panel.find('#btn--resume').prop('disabled')).toBeFalsy();
    expect(panel.find('#btn--reset').prop('disabled')).toBeFalsy()
  })
});
