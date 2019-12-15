import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('test Button', () => {
  let props = {
    children: 'Button',
    onClick: jest.fn()
  };

  let button = shallow(<Button {...props} />);

  it('render Button', () => {
    expect(button.length).toEqual(1);
    expect(button.find('button').text()).toEqual(props.children)
  });

  button.simulate('click');

  it('test click', () => {
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
});
