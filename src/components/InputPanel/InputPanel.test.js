import React from 'react'
import { shallow, mount } from 'enzyme'

import InputPanel from './InputPanel'

it('renders without crashing', () => {
  shallow(<InputPanel />)
});

describe('input panel', () => {
  let mock = jest.fn();

  let props = {
    setTime: mock
  };

  let panel = mount(<InputPanel {...props} />);

  describe('test change', () => {
    let minutes = 2;

    beforeEach(() => {
      panel.find('#minutes').simulate('change', {
        target : {
          value: minutes
        }
      })
    });

    it('change', () => {
      expect(panel.state().minutes).toEqual(minutes)
    })
  });

  describe('test click', () => {
    panel.find('button').simulate('click', {
      preventDefault: () => {}
    });

    it('click', () => {
      expect(mock).toHaveBeenCalledTimes(1)
    })
  })
});
