import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { building } from './Redux/Actions/actions'

import 'bootstrap/dist/css/bootstrap.css'

export const App = () => {

  const [step, setStep] = useState(1)
  const [checkedValue, setCeckedValue] = useState(String)
  const [title, setTitle] = useState('Что будем строить?')

  const dispatch = useDispatch()
  const state = useSelector(state => state.rootReducer)
  
  return<>
    <div className="card text-center">
      <div className="card-header">
        Калькулятор цены конструкций
     </div>
      <div className="card-body">
        <span className='text-muted'>{`Шаг ${step}`}</span>
        <h5 className="card-title">{title}</h5>
        <input type="radio" value='1' className="btn-check" name="btnradio" id='House' autoComplete="off" onChange={e => setCeckedValue(e.target.value)}/>
        <label className="card-text text-success font-weight-bold" htmlFor="House">Жилой Дом</label>
        <br />
        <input type="radio" value='2' className="btn-check" name="btnradio" id="Garage" autoComplete="off" onChange={e => setCeckedValue(e.target.value)}/>
        <label className="card-text text-success font-weight-bold" htmlFor="Garage">Гараж</label>
      </div>
      <div className="card-footer text-muted">
        <button type="button" className="btn btn-outline-warning">Отмена</button>
        <button type="button" className="btn btn-outline-info ml-5" onClick={() => dispatch(building(checkedValue))}>Далее</button>
      </div>
    </div>
  </>
}