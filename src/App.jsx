import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Calculator } from './Components/Calculator/Calculator'

import 'bootstrap/dist/css/bootstrap.css'

export const App = () => {
  return<>
  <div className="container">
    <div className="row">
      <BrowserRouter>
          <Route exact path='/'>
            <Calculator />
          </Route>
      </BrowserRouter>
    </div>
    </div>
  </>
}
