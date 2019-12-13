import React from 'react'
import { connect } from 'react-redux'

import { change } from '../../actions'

const SelectSpeed = ({ dispatch, speed }) => (
  <div className='input-field'>
    <select name='speed' onChange={event => dispatch(change(event.target.value))} defaultValue={speed}>
      <option value='1'>x1.0</option>
      <option value='1.5'>x1.5</option>
      <option value='2'>x2.0</option>
    </select>
    <label>Speed</label>
  </div>
);

const mapStateToProps = ({ speed }) => ({ speed });

export default connect(mapStateToProps)(SelectSpeed)
