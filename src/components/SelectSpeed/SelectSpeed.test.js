import React from 'react'
import { shallow } from 'enzyme'

import { SelectSpeed } from './SelectSpeed'

describe('test SelectSpeed', () => {
  let props = {
    dispatch: jest.fn(),
    speed: 1
  };

  let select = shallow(<SelectSpeed {...props} />);

  it('render SelectSpeed', () => {
    expect(select.length).toEqual(1)
  });

  it('test change', () => {
    select.find('select').simulate('change', {
      target: {
        name: 'speed'
      }
    });

    expect(props.dispatch).toBeCalledTimes(1)
  })
});
