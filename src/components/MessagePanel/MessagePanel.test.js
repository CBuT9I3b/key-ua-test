import React from 'react'
import { shallow } from 'enzyme'

import { MessagePanel } from './MessagePanel'

describe('test MessagePanel', () => {
  it('render MessagePanel', () => {
    let props = {
      startTime: 20,
      secondsRemaining: 20
    };

    let panel = shallow(<MessagePanel {...props} />);

    expect(panel.length).toEqual(1);
    expect(panel.find('h4')).toHaveLength(0)
  });

  it('on the halfway', () => {
    let nextProps = {
      startTime: 20,
      secondsRemaining: 10
    };

    let panel = shallow(<MessagePanel {...nextProps} />);

    expect(panel.find('h4').text()).toEqual('More than halfway there!')
  });

  it('time is up', () => {
    let nextProps = {
      startTime: 20,
      secondsRemaining: 0
    };

    let panel = shallow(<MessagePanel {...nextProps} />);

    expect(panel.find('h4').text()).toEqual('Time’s up!')
  })
});
