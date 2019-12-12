import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

it('renders without crashing', () => {
  shallow(<Button />)
});

describe('test button', () => {
  let mock = jest.fn();

  let props = {
    onClick: mock
  };

  let button = shallow(<Button {...props} />);

  button.find('button').simulate('click', {
    preventDefault: () => {}
  });

  it('test click', () => {
    expect(mock).toHaveBeenCalledTimes(1)
  })
});
