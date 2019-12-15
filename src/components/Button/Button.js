import React from 'react'

const Button = ({ children, ...rest }) => (
  <button className='btn waves-effect waves-light' {...rest}>
    {children}
  </button>
);

export default Button
