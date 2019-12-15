import React from 'react'
import { shallow } from 'enzyme'

import { ClockFace } from './ClockFace.js'

describe('test ClockFase', () => {
  let props = {
    startTime: 10,
    secondsRemaining: 10
  };

  let clockFace = shallow(<ClockFace {...props} />);

  it('render ClockFace', () => {
    expect(clockFace.length).toEqual(1);
    expect(clockFace.find('h1').hasClass('red-text blink')).toEqual(true)
  });
});
