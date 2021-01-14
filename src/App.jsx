import React from 'react'
import { Calculator } from './Components/Calculator/Calculator'

import 'bootstrap/dist/css/bootstrap.css'

export const App = () => {
  return<>
  <div className="container">
    <div className="row">
    <Calculator />
    </div>
    </div>
  </>
}
