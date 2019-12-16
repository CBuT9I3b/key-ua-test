import React from 'react'
import { mount } from 'enzyme'

import { InputPanel } from './InputPanel'

describe('test InputPanel', () => {
  let initialState = {
    minutes: 0,
    seconds: 0
  };

  let props = {
    dispatch: jest.fn(),
    isRuns: false
  };

  let panel = mount(<InputPanel {...props} />);

  it('render InputPanel', () => {
    expect(panel.length).toEqual(1)
  });

  describe('test change', () => {
    let minutes = 1;

    beforeEach(() => {
      panel.find('#minutes').simulate('change', {
        target: {
          value: minutes,
          id: 'minutes'
        }
      })
    });

    it('updates minutes', () => {
      expect(panel.state().minutes).toEqual(minutes)
    });

    afterEach(() => {
      panel.setState(initialState)
    })
  });

  describe('test submit', () => {
    panel.setState({ minutes: 1 });

    beforeEach(() => {
      panel.find('form').simulate('submit', {
        preventDefault: () => {}
      })
    });

    it('submit', () => {
      expect(props.dispatch).toBeCalledTimes(1)
    });

    afterEach(() => {
      panel.setState(initialState)
    })
  });

  describe('test button', () => {
    let button = panel.find('button');

    it('test button disabled', () => {
      button.simulate('click');
      expect(props.dispatch).toBeCalledTimes(1)
    });

    it('test button not disabled', () => {
      panel.setState({ minutes: 1 });

      button.simulate('click');
      expect(props.dispatch).toBeCalledTimes(2)
    })
  })
});
