import React from 'react'

const SelectSpeed = ({ speed, handleChange }) => (
  <div className='input-field'>
    <select name='speed' onChange={handleChange} defaultValue={speed}>
      <option value='1'>x1.0</option>
      <option value='1.5'>x1.5</option>
      <option value='2'>x2.0</option>
    </select>
    <label>Speed</label>
  </div>
);

export default SelectSpeed
