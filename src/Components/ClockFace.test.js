import React from 'react'
import { shallow } from 'enzyme'

import ClockFace from './ClockFace.js'

it('renders without crashing', () => {
  shallow(<ClockFace />)
});
