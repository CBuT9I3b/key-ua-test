import React from 'react'

const Button = ({ children, onClick, disabled }) => (
  <button className='btn waves-effect waves-light' disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

export default Button
