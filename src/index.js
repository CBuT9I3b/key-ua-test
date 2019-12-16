import React from 'react'
import { render } from 'react-dom'
import M from 'materialize-css/dist/js/materialize'

import { App } from './components'

import 'materialize-css/dist/css/materialize.css'

render(<App />, document.getElementById('root'));

M.AutoInit();
