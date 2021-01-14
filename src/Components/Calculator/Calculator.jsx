import React from 'react'


export const Calculator = () => {
    return <>
        <div className="card text-center">
            <div className="card-header">
                Калькулятор цены конструкций
                 </div>
            <div className="card-body">
                <span className='text-muted'>Шаг 1</span>
            <h5 class="card-title">Что будем строить?</h5>
                <p className="card-text">Жилой Дом</p>
                <p className="card-text">Гараж</p>
            </div>
            <div className="card-footer text-muted">
                <button type="button" class="btn btn-outline-warning">Отмена</button>
                <button type="button" class="btn btn-outline-info ml-5">Далее</button>
            </div>
        </div>
    </>
}