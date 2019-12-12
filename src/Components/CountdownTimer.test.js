import React from 'react'
import { mount, shallow } from 'enzyme'

import CountdownTimer from './CountdownTimer'

it('renders without crashing', () => {
  shallow(<CountdownTimer />);
});

describe('timer', () => {
  let timer = mount(<CountdownTimer />);
  let instance = timer.instance();

  let time = 60;

  instance.setTime(time);

  it('test set time', () => {
    expect(timer.state().startTime).toEqual(time);
    expect(timer.state().secondsRemaining).toEqual(time);
  });

  it('test tick', () => {
    instance.tick();

    expect(timer.state().secondsRemaining).toEqual(59);
  });

  it('test start', () => {
    instance.start();

    expect(timer.state().runs).toEqual(true);
  });

  it('test pause', () => {
    instance.pause();

    expect(timer.state().runs).toEqual(true);
    expect(timer.state().pause).toEqual(true);
  });

  it('test resume', () => {
    instance.resume();

    expect(timer.state().runs).toEqual(true);
    expect(timer.state().pause).toEqual(false);
  });

  it('test final', () => {
    instance.final();

    expect(timer.state().runs).toEqual(false);
    expect(timer.state().pause).toEqual(false);
  });

  it('test reset', () => {
    instance.reset();

    expect(timer.state().startTime).toEqual(0);
    expect(timer.state().secondsRemaining).toEqual(0);
    expect(timer.state().runs).toEqual(false);
    expect(timer.state().pause).toEqual(false);
  });

  describe('test change speed', () => {
    let speed = 2;

    beforeEach(() => {
      timer.find('select').simulate('change', {
        target : {
          value: speed
        }
      })
    });

    describe('e', () => {
      expect(timer.state().speed).toEqual(speed)
    })
  })
});
